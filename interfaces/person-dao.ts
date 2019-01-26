import { Person } from './../aula/person';
import { DAOinterface } from './dao.interface';



export class PersonDAO implements DAOinterface{


    tableName:string;

    insert(person:Person):boolean{
         console.log('Inserindo ...'+ person.toString());
          return false;
    }

    update(person:Person):boolean{
        return true;
    }
    delete(id:number):boolean{
        return false;
    }
    find(id:number):Person{
        return new Person('teste');
    }
    findAll():[Person]{
        return [new Person('Stenio')];
    }

    }