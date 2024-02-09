import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory', () => {

    // No interesa que los métodos sean los correctos, porque estoy evaluando otra funcionalidad
    const getUUID = () => '1234';
    const getAge = () => 35;
   
    it('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');
    });

    it('makePerson should return a person', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });
        const johndoe = makePerson({ name: 'John Doe', birthdate: '1999-12-08'});

        expect(johndoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1999-12-08',
            age: 35
        });
    });
});