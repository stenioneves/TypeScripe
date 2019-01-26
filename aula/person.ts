export class Person{

    private name: string;
    constructor(name:string){
      this.name=name;
    }
    public MostrarIdade(idade:number){
        console.log(`${this.name} tem ${idade} anos`);
    }
    public toString():string{
        return `Class Person, name ${this.name}`;
    }
}