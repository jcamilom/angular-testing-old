import { Calculator } from './calculator';

describe('Test for Calculator', () => {

    let calculator;

    // Arrange
    beforeEach(() => {
        calculator = new Calculator();
    });
    
    describe('Test for multiply', () => {

        it('should return nine', () => {
            // Act
            let result = calculator.multiply(3, 3);
            // Assert
            expect(result).toEqual(9);
        });

        it('should return four', () => {
            // Act
            let result = calculator.multiply(1, 4);
            // Assert
            expect(result).toEqual(4);
        });

    });

    describe('Test for divide', () => {

        it('divide for a number', () => {
            // Act && Assert
            expect(calculator.divide(6, 3)).toEqual(2);
            expect(calculator.divide(5, 2)).toEqual(2.5);
        });

        it('divide by zero', () => {
            // Act && Assert
            expect(calculator.divide(4, 0)).toBeNull;
            expect(calculator.divide(1234, 0)).toBeNull;
        });

    });
    
})