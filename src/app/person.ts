export class Person {

    constructor(
        public name: string,
        public lastname: string,
        public age: number,
        public weight: number,
        public height: number
    ) { }

    public calcIMC(): string {
        let imc = this.weight / (this.height * this.height);
        if(imc >= 0 && imc < 18) return 'down';
        else if(imc >= 18 && imc < 25) return 'normal';
        else if(imc >= 25 && imc < 27) return 'overweight';
        else if(imc >= 27 && imc < 30) return 'overweight level 1';
        else if(imc >= 30 && imc < 40) return 'overweight level 2';
        else if(imc >= 40) return 'overweight level 3';
        else return 'not found';
    }

}
