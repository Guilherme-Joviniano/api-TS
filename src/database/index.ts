import moongose, { ConnectOptions, Mongoose } from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();


const connectionURL: string = (process.env.CONNECTION_KEY as string);

class Database {
    static instance: Database;
    
    private connection: moongose.Connection;
    
    private constructor(connectionURL: string) {
        this.connection = moongose.createConnection(connectionURL)
    }

    static getConnection(connectionURL: string): moongose.Connection {
        if (Database.instance) return Database.instance.connection
        Database.instance = new Database(connectionURL);
        return Database.instance.connection;
    }
}

const connection = Database.getConnection(connectionURL)

export default connection