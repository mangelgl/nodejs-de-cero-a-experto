
// Patrón A A A
describe('Test in the App file', () => {    
    
    // it() se puede reemplazar por test()
    it('should be true', () => {
        
        // 1. Arrange
        const num1 = 10;
        const num2 = 4;

        // 2. Act
        const result = num1 + num2;


        // 3. Assert
        expect(result).toBe(14);
    });

});