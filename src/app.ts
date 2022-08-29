import express from "express";
import homeRouter from './routes/home';
import userRouter from './routes/user';


export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    private middleware() {
        this.server.use(express.json());
    }
    private router() {
        this.server.use('/', homeRouter);
        this.server.use('/user/', userRouter);
    }
}