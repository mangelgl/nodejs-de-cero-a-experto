import { Router } from "express";
import { ToDoRoutes } from "./toDo/toDoRoutes";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        //* Middleware
        /* router.use( function ( req, res, next ) {
            console.log(`${req.method} ${res.statusCode} ${req.url}`);
            next();
        } ); */

        router.use('/api/todos', ToDoRoutes.routes );

        return router;
    }
}