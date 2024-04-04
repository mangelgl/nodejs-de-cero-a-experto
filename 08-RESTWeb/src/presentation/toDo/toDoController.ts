import { Request, Response } from "express";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dto";
import { CreateTodo, DeleteTodo, GetTodoById, GetTodos, ToDoRepository, UpdateTodo } from "../../domain";

export class ToDoController {

    // * DI
    constructor (
        private readonly repository: ToDoRepository
    ) {

    }

    public getTodos = ( req: Request, res: Response ) => {
        
        new GetTodos( this.repository )
            .execute()
            .then( todos => res.json( todos ))
            .catch( error => res.status(400).json({ error }) );
    }

    public getTodoById = ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número

        new GetTodoById( this.repository )
            .execute( id )
            .then( todo => res.json( todo ))
            .catch( error => res.status(400).json({ error }) );
    }

    public createTodo = async ( req: Request, res: Response ) => {        
        const [ error, createTodoDto ] = CreateTodoDto.createTodo(req.body);
        new CreateTodo( this.repository )
            .execute( createTodoDto! )
            .then( todo => res.json( todo ))
            .catch( error => res.status(400).json({ error }) );
    }

    public updateTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });
        const [ error, updateTodoDto ] = UpdateTodoDto.updateTodo({...req.body, id});
        if ( error ) res.status(400).json({ error });

        new UpdateTodo( this.repository )
            .execute( updateTodoDto! )
            .then( todo => res.json( todo ))
            .catch( error => res.status(400).json({ error }) );
    }

    public deleteTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        new DeleteTodo( this.repository )
            .execute( id )
            .then( todo => res.json( todo ))
            .catch( error => res.status(400).json({ error }) );
    }
}