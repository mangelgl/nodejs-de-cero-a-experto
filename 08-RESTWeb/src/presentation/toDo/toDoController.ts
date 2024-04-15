import { Request, Response } from "express";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dto";
import { CreateTodo, CustomError, DeleteTodo, GetTodoById, GetTodos, ToDoRepository, UpdateTodo } from "../../domain";

export class ToDoController {

    // * DI
    constructor (
        private readonly repository: ToDoRepository
    ) {}

    private handleError = ( res: Response, error: unknown ) => {
        if ( error instanceof CustomError ) {
            res.status( error.statusCode ).json({ error: error.message });
            return;
        }

        res.status(500).json({ error: 'Internal server error - Check logs!' });
    }

    public getTodos = ( req: Request, res: Response ) => {
        
        new GetTodos( this.repository )
            .execute()
            .then( todos => res.json( todos ))
            .catch( error => this.handleError( res, error ) );
    }

    public getTodoById = ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número

        new GetTodoById( this.repository )
            .execute( id )
            .then( todo => res.json( todo ))
            .catch( error => this.handleError( res, error ) );
    }

    public createTodo = async ( req: Request, res: Response ) => {        
        const [ error, createTodoDto ] = CreateTodoDto.createTodo(req.body);
        new CreateTodo( this.repository )
            .execute( createTodoDto! )
            .then( todo => res.status(201).json( todo ))
            .catch( error => this.handleError( res, error ) );
    }

    public updateTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });
        const [ error, updateTodoDto ] = UpdateTodoDto.updateTodo({...req.body, id});
        if ( error ) res.status(400).json({ error });

        new UpdateTodo( this.repository )
            .execute( updateTodoDto! )
            .then( todo => res.json( todo ))
            .catch( error => this.handleError( res, error ) );
    }

    public deleteTodo = async ( req: Request, res: Response ) => {
        const id = +req.params.id; // operador '+' convierte el valor a número
        if ( isNaN( id )) return res.status(400).json({ error: `Id is not a number` });

        new DeleteTodo( this.repository )
            .execute( id )
            .then( todo => res.json( todo ))
            .catch( error => this.handleError( res, error ) );
    }
}