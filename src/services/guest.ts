import { dbKnexClient } from "../db"
import { IGuest } from "../Interfaces/guest";

//TODO: if something went wrong with the sevice layer operations (ex: creation) the service layer should be the one to propogate the erro

export const getGuests = async () => {
    const result = await dbKnexClient('guests')
        .leftJoin('phone_numbers', 'guests.id', 'phone_numbers.user_id')
        .select('guests.*', 'phone_numbers.phone_number')
        .groupBy('guests.id', 'phone_numbers.phone_number');

    const guests: IGuest[] = result.reduce((acc: IGuest[], row: any) => {
        const existingGuest = acc.find(g => g.id === row.id);
        if (existingGuest) {
            existingGuest.phone_numbers.push(row.phone_number);
        } else {
            const { phone_number, created_at, updated_at, ...rest } = row;
            acc.push({
                ...rest,
                phone_numbers: row.phone_number ? [row.phone_number] : [],
            });
        }
        return acc;
    }, []);

    return guests;
};

export const getGuest = async (id: string) => {
    const guest = await dbKnexClient('guests')
        .where('id', id)
        .first();

    // TODO: handle guest not found
    const phoneNumbers = await dbKnexClient('phone_numbers').where('user_id', id);
    const { created_at, updated_at, ...rest } = guest;

    return {
        ...rest,
        phone_numbers: phoneNumbers.map(x => x.phone_number),
    };
}

export const createGuest = async (first_name: string, last_name: string, email: string, phone_numbers: string[]): Promise<string> => {

    const [id] = await dbKnexClient('guests').insert([{
        first_name,
        last_name,
        email,
    }]).returning('id')

    let phoneDatas = phone_numbers.map(phone_number => ({ phone_number, user_id: id.id }));
    await dbKnexClient('phone_numbers').insert(phoneDatas);
    return id;
}

export const updateGuest = async (id: string, first_name: string, last_name: string, email: string, phone_numbers: string[]): Promise<string> => {

    await dbKnexClient('guests').where('id', '=', id).update({
        first_name,
        last_name,
        email,
    })
    await dbKnexClient('phone_numbers').where('user_id', '=', id).del();
    let phoneDatas = phone_numbers.map(phone_number => ({ phone_number, user_id: id }));
    await dbKnexClient('phone_numbers').insert(phoneDatas);
    return id;
}

export const deleteGuest = async (id: string): Promise<void> => {
    await dbKnexClient('phone_numbers').where('user_id', id).del();

    const deletedCount = await dbKnexClient('guests').where('id', id).del();

    if (deletedCount === 0) {
        throw new Error(`Guest with id ${id} not found or already deleted`);
    }
};


