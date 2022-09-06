import { rejects } from "assert";
import express from "express";
import mysql from "mysql";
import { resolve } from "path";

const app = express();

export abstract class Model {

    private static db_host: string = "localhost";
    private static db_port: number = 3000;
    private static db_user: string = "root";
    private static db_name: string = "pruebamvc";
    private static db_pass: string = "";
    private connection: any;

    protected query: string = "";

    abstract get_data(userQuery: string): any;

    private async db_connection(): Promise<void> {

        this.connection = mysql.createConnection({
            host: Model.db_host,
            /*       port: Model.db_port, */
            user: Model.db_user,
            password: Model.db_pass,
            database: Model.db_name,
        });

        /* app.listen(Model.db_port); */
        this.connection.connect();
    }

    private async db_close(): Promise<void> {
        this.connection.end();
    }

    protected async get_query(): Promise<any> {
        return new Promise((resolve, rejects) => {
            this.db_connection()
            this.connection.query(this.query, function (err: any, rows: any[], fields: any) {
                if (err) {
                    console.error(err)
                    return rejects(err);
                }
                console.log(rows)
                return resolve(rows);
            });
        })

    }

}

/* CRUD

*/