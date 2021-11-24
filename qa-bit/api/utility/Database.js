import knex from "knex";

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'reclutamiento',
    }
});

export default db;