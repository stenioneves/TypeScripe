import { Person } from './person';

export class Student extends Person{
    
    constructor(name:string){
        super(name)
    }

    public MostrarIdade(idade:number): void{
        console.log('Estudando....');
        super.MostrarIdade(idade);
    }
}