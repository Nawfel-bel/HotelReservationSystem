import { Request, Response, NextFunction } from "express";

class ErrorResponse extends Error {
    public statusCode: number;
    public message: string;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

const errorHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    console.log("[Middlware: Error Handler]: error: ");
    res.status(200).json({ data: res.locals.data, paginatedData: res.locals.paginatedResult })
    // if
    // res.status(err.statusCode || 500).json({
    //     success: false,
    //     message: err.message || "Server Error",
    //     data: null,
    // });
};

export { ErrorResponse, errorHandler };