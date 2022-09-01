import moongose, { ConnectOptions, Mongoose } from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();


const connectionURL: string = (process.env.CONNECTION_KEY as string);

console.log(connectionURL)

class Database {
    static instance: Database;
    
    private connection: Promise<typeof moongose>;
    
    private constructor(connectionURL: string) {
        this.connection = moongose.connect(connectionURL, { useNewUrlParser: true, useCreateIndex: true })
    }

    static getConnection(connectionURL: string): Promise<typeof moongose> {
        if (Database.instance) return Database.instance.connection
        Database.instance = new Database(connectionURL);
        return Database.instance.connection;
    }
}

const connection = Database.getConnection(connectionURL)

export default connection