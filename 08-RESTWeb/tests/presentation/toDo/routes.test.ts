import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../src/data/postgres';

describe('toDo routes.ts', () => {

    beforeAll(async () => {
        await testServer.start();
    });

    afterAll(async () => {        
        await testServer.close();
    });

    beforeEach( async() => {
        await prisma.toDo.deleteMany();
    });

    const todo1 = { text: 'Todo 1 text' };
    const todo2 = { text: 'Todo 2 text' };

    test('should return all toDos /api/todos', async () => {

        await prisma.toDo.createMany({
            data: [ todo1, todo2 ]
        });

        const { body } = await request( testServer.app )
            .get('/api/todos')
            .expect(200);

        expect( body ).toBeInstanceOf( Array );
        expect( body.length ).toBe(2);
        expect( body[0].text ).toBe( todo1.text );
        expect( body[1].text ).toBe( todo2.text );

    });

    test('should return a toDo /api/todos/:id', async () => {

        const todo = await prisma.toDo.create({ data: todo1 });

        const { body } = await request( testServer.app )
            .get(`/api/todos/${ todo.id }`)
            .expect(200);
        
        expect( body ).toEqual({
            id: todo.id,
            text: todo.text,
            completedAt: todo.completedAt
        });
        expect( body ).toBeInstanceOf( Object );

    });

    test('should return a 404 status - Not Found on /api/todos/:id', async () => {
        const id = 999;
        const { body } = await request( testServer.app )
            .get(`/api/todos/${ id }`)
            .expect(404);
        
            expect( body ).toEqual({ error: `Todo with id ${ id } not found` });
        
    });

    test('should create a new todo /api/todos', async () => {

        const { body } = await request( testServer.app )
            .post('/api/todos')
            .send( todo1 )
            .expect(201);

        expect( body ).toEqual({
            id: expect.any(Number),
            text: todo1.text,
            completedAt: null
        });

    });

    test('should update a todo /api/todos/:id', async () => {
        
        const todo = await prisma.toDo.create({ data: todo1 });
        const textUpdated = 'Text updated';

        const { body } = await request( testServer.app )
            .put(`/api/todos/${todo.id}`)
            .send({ text : textUpdated })
            .expect(200);
        
        expect( body ).toEqual({
            id: todo.id,
            text: textUpdated,
            completedAt: null
        });
    });

    test('should return an 404 status code if todo was not found /api/todos/:id', async () => {
        
        const todo = await prisma.toDo.create({ data: todo1 });
        const textUpdated = 'Text updated';

        const { body } = await request( testServer.app )
            .put(`/api/todos/999`)
            .send({ text : textUpdated })
            .expect(404);
        
        expect( body ).toEqual({ error: `Todo with id 999 not found` });
    });

    test('should update only the date of a todo', async () => {
        const todo = await prisma.toDo.create({ data: todo1 });
        
        const { body } = await request( testServer.app )
        .put(`/api/todos/${ todo.id }`)
        .send({ completedAt: '2024-04-12' })
        .expect(200);

        expect( body ).toEqual({
            id: todo.id,
            text: todo.text,
            completedAt: '2024-04-12T00:00:00.000Z'
        });
    });

    test('should delete a todo /api/todos/:id', async () => {

        const todo = await prisma.toDo.create({ data: todo1 });
        
        const { body } = await request( testServer.app )
        .delete(`/api/todos/${ todo.id }`)
        .expect(200);

        expect( body ).toEqual({
            id: expect.any(Number),
            text: todo.text,
            completedAt: null
        });
    });

    test('should return a 404 status if todo does not exists /api/todos/:id', async () => {
        
        const { body } = await request( testServer.app )
        .delete(`/api/todos/999`)
        .expect(404);

        expect( body ).toEqual({ error: 'Todo with id 999 not found' });
    });
    
    
});