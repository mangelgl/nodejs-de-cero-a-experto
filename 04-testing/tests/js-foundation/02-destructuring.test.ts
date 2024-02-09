import { paises } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring', () => {
    
    it('paises should contain España and Italia', () => {
        
        expect(paises).toContain('España');
        expect(paises).toContain('Italia');

    });

    it('paises should be length 4 or more', () => {

        expect(paises.length).toBeGreaterThanOrEqual(4);
    });

    it('paises should not contain Alemania', () => {

        expect(paises).not.toContain('Alemania');
    });
})