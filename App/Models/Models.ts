import express from "express";
import mysql from "mysql";

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

    private db_connection(): void {

        this.connection = mysql.createConnection({
            host: Model.db_host,
            /*       port: Model.db_port, */
            user: Model.db_user,
            password: Model.db_pass,
            database: Model.db_name,
        });

        app.listen(Model.db_port);
        this.connection.connect();
    }

    private db_close(): void {
        this.connection.end();
    }

    protected get_query(): any {
        this.db_connection();
        let res = this.connection.query(this.query, function (err: any, rows: any, fields: any) {
            if (err) throw err;
            console.log('The solution is: ', rows[0].solution);
        });

        return res;
    }

}

/* CRUD

*/