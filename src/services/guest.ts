import { dbKnexClient } from "../db"

export const getGuests = async () => {
    return await dbKnexClient('guest')
}

export const getGuest = async (id: string) => {
    return await dbKnexClient('guest').where('id', id);
}

export const createGuest = async (first_name: string, last_name: string, email: string): Promise<string> => {
    const [id] = await dbKnexClient('guest').insert({
        first_name,
        last_name,
        email,
    }).returning('id')
    return id;
}
