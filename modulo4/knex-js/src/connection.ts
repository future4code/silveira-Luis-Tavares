import knex from "knex";

export const connection = knex({
    client: "mysql",
    connection: {
        host: "35.226.146.116",
        port: 3306,
        user: "21814429-luis-tavares",
        password: "E+OtGA2UqfrcfuaH4/vQ",
        database: "silveira-21814429-luis-tavares",
        multipleStatements: true
    }
});