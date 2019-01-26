import { DAOinterface } from './dao.interface';



export class DAO <T>implements DAOinterface<T>{


    tableName:string;

    insert(obejct:T):boolean{
         console.log('Inserindo ...' );
          return false;
    }

    update(object:T):boolean{
        return true;
    }
    delete(id:number):boolean{
        return false;
    }
    find(id:number):T{
        return null;
    }
    findAll():[T]{
        return null;
    }

    }