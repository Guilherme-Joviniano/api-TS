import express from "express";

// rotas
import homeRouter from './routes/home';
import userRouter from './routes/user';
// middlewares
import './database'

export class App {
    public server: express.Application;
    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }
    private middleware() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
    }
    private router() {
        this.server.use('/', homeRouter);
        this.server.use('/user/', userRouter);
    }
}