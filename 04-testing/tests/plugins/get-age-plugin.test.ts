import { getAge } from '../../src/plugins/get-age-plugin'

describe('plugins/get-age-plugin', () => {
    
    const birthdate = '1999-12-08'
    
    test('getAge() should return the age of a person', () => {

        const age = getAge(birthdate);

        /**
         * Este test no es robusto, ya que es propenso a fallos por cambios de año
         */
        // expect(age).toBe(25);
        expect(typeof age).toBe('number');
    });

    test('getAge() should return current age', () => {

        const age = getAge(birthdate);
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        
        expect(age).toBe(calculatedAge);
    });

    /**
     * SpyOn
     */
    test('getAge() should return 0 years', () => {

        /**
         * SpyOn sobreescribe métodos
         * Modifica el valor de retorno del método getFullYear()
         */
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '1995-06-10';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();
    });
});