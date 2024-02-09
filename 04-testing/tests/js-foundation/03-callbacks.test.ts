import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('js-foundation/03-callbacks', () => {
    
    it('getUserById should return an error if user does not exists', (done) => {
        
        const id = 10;
        getUserById(id, (err, user) => {
           
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            // Cuando termina de ejecutarse la función, se debe llamar al done
            // Para funciones asíncronas
            done();
        });
    });

    it('getUserById should return a user if user exists', () => {

        const id = 1;
        getUserById(id, (err, user) => {
            
            expect(err).toBeUndefined();
            expect(user).toBeDefined();
        });
    });

    it('getUserById should be an User object', () => {

        const id = 1;
        getUserById(id, (err, user) => {
            
            expect(err).toBeUndefined();
            expect(user).toBeInstanceOf(Object);
        });
    });

    it('getUserById should return John Doe and id 1', () => {

        const id = 1;
        getUserById(id, (err, user) => {

            expect(err).toBeUndefined();
            // !Solución propuesta
            // expect(user).toEqual({id: 1, name: 'John Doe'});
            
            // ! Solución personal
            expect(user?.id).toBe(1);
            expect(user?.name).toBe('John Doe');
        });
    });
});