// knexfile.js
export const development = {
    client: 'sqlite3',
    connection: {
        filename: './db/db.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
        directory: './db/migrations'
    }
};