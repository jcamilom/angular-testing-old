import { Person } from './person';

describe('Test for person', () => {
    
    let person;

    // Arrange
    beforeEach(() => {
        person = new Person(
            'juan',
            'alamo',
            23,
            40,
            1.65
        );
    });

    describe('test for data', () => {

        it('attributes', () => {
            expect(person.name).toEqual('juan');
            expect(person.lastname).toEqual('alamo');
            expect(person.age).toEqual(23);
            expect(person.weight).toEqual(40);
            expect(person.height).toEqual(1.65);
        });
    });

    describe('test for calcIMC', () => {

        it('shloud return an string: down', () => {
            person.weight = 40;
            expect(person.calcIMC()).toEqual('down');
        });

        it('shloud return an string: normal', () => {
            person.weight = 58;
            expect(person.calcIMC()).toEqual('normal');
        });

        it('shloud return an string: overweight', () => {
            person.weight = 70;
            expect(person.calcIMC()).toEqual('overweight');
        });

        it('shloud return an string: overweight level 1', () => {
            person.weight = 75;
            expect(person.calcIMC()).toEqual('overweight level 1');
        });

        it('shloud return an string: overweight level 2', () => {
            person.weight = 90;
            expect(person.calcIMC()).toEqual('overweight level 2');
        });

        it('shloud return an string: overweight level 3', () => {
            person.weight = 120;
            expect(person.calcIMC()).toEqual('overweight level 3');
        });

        it('shloud return an string: not found', () => {
            person.weight = -48;
            expect(person.calcIMC()).toEqual('not found');
            person.weight = -48;
            person.height = -1.70;
            expect(person.calcIMC()).toEqual('not found');
        });

    });

});