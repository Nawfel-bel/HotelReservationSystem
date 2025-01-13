
import { Request, Response, NextFunction } from "express";



interface IReducerParams<T, K extends keyof T> {
    key: K;
    types: { rowKey: string, objKey: keyof T }[];
}


class ReducerMiddlware<T, K extends keyof T> {
    private key: K;
    private reduceTypes: { rowKey: string, objKey: keyof T }[];
    private ctor;

    constructor(params: IReducerParams<T, K>, typeCtor: new (...args: any[]) => T) {
        this.key = params.key;
        this.reduceTypes = params.types;
        this.ctor = typeCtor;
    }

    reduce = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {

        console.log('[Reducer Middleware]: working')
        const reducedData: T[] = res.locals.data.reduce((acc: T[], row: any) => {
            const existingItem = acc.find((item) => item[this.key] === row[this.key]);

            if (existingItem != undefined) {

                this.reduceTypes.forEach((typeToReduce) => {
                    if (row[typeToReduce.rowKey]) {
                        existingItem[typeToReduce.objKey] = [...existingItem[typeToReduce.objKey] as (keyof T)[], row[typeToReduce.rowKey]] as any
                    } else {
                        // now row key found?
                        throw new Error("key not found");
                    }
                });

            } else {
                const newItem = new this.ctor(row);
                this.reduceTypes.forEach((type) => {
                    if (row[type.rowKey]) {
                        newItem[type.objKey] = [row[type.rowKey]] as any;
                    } else {
                        newItem[type.objKey] = [] as any;
                    }
                });
                acc.push(newItem);
            }

            return acc;
        }, [] as T[]);
        res.locals.data = reducedData;
        next()
    };
}


export { ReducerMiddlware, IReducerParams };