import { Request, Response } from "express";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dto";
import { ToDoRepository } from "../../domain";

export class ToDoController {

    // * DI
    constructor (
        private readonly repository: ToDoRepository
    ) {

    }

    public getTodos = async ( req: Request, res: Response ) => {
        const todos = await this.repository.getAll();
        return res.json( todos );
    }

    public getTodoById = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        
        try {
            const todo = await this.repository.findById( id );
            res.json( todo );
        } catch (error) {
            res.status(400).json({ error });
        } 
    }

    public createTodo = async ( req: Request, res: Response ) => {        
        const [ error, createTodoDto ] = CreateTodoDto.createTodo(req.body);
        if ( error ) res.status(400).json({ error });

        const todo = await this.repository.create( createTodoDto! );
        res.json( todo );
    }

    public updateTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });
        const [ error, updateTodoDto ] = UpdateTodoDto.updateTodo({...req.body, id});
        if ( error ) res.status(400).json({ error });

        const todo = await this.repository.update( updateTodoDto! );
        res.json( todo );
    }

    public deleteTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        const todo = await this.repository.delete( id );
        res.json( todo );
    }
}