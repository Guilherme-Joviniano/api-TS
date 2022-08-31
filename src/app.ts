import express from "express";

// rotas
import homeRouter from './routes/home';
import userRouter from './routes/user';
// middlewares
import handleError from './middlewares/CustomizedErrorHandler';
import './models/UserSchema'

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
        // Handle the customs errors!
        this.server.use(handleError);

    }

    private middleware() {
        this.server.use(express.json());
    }
    private router() {
        this.server.use('/', homeRouter);
        this.server.use('/user/', userRouter);
    }
}