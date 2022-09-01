import express from "express";

// rotas
import homeRouter from './routes/home';
import userRouter from './routes/user';
// middlewares
import handleErrors from './middlewares/CustomizedErrorHandler';
import './database'

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router(); 
        this.handlerErrorEntity();
    }
    private middleware() {
        this.server.use(express.json());
    }
    private router() {
        this.server.use('/', homeRouter);
        this.server.use('/user/', userRouter);
    }
    private handlerErrorEntity() {
        this.server.use(handleErrors)
    }
}