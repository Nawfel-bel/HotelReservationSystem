import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('guests').del()

    await knex('guests').insert([
        { first_name: 'peach_F', last_name: 'peach_L', email: "peach@foobar.com" },
        { first_name: 'bowser_F', last_name: 'bowser_L', email: "bowser@foobar.com" },
        { first_name: 'mario_F', last_name: 'mario_L', email: "mario@foobar.com" },
        { first_name: 'luigi_F', last_name: 'luigi_L', email: "luigi@foobar.com" },
        { first_name: 'toad_F', last_name: 'toad_L', email: "toad@foobar.com" },
        { first_name: 'yoshi_F', last_name: 'yoshi_L', email: "yoshi@foobar.com" },
        { first_name: 'daisy_F', last_name: 'daisy_L', email: "daisy@foobar.com" },
        { first_name: 'rosalina_F', last_name: 'rosalina_L', email: "rosalina@foobar.com" },
        { first_name: 'waluigi_F', last_name: 'waluigi_L', email: "waluigi@foobar.com" },
        { first_name: 'wario_F', last_name: 'wario_L', email: "wario@foobar.com" },
        { first_name: 'koopa_F', last_name: 'koopa_L', email: "koopa@foobar.com" },
        { first_name: 'shyGuy_F', last_name: 'shyGuy_L', email: "shyguy@foobar.com" },
        { first_name: 'birdo_F', last_name: 'birdo_L', email: "birdo@foobar.com" },
        { first_name: 'hammerBro_F', last_name: 'hammerBro_L', email: "hammerbro@foobar.com" },
        { first_name: 'kingBoo_F', last_name: 'kingBoo_L', email: "kingboo@foobar.com" },
    ]);
};
