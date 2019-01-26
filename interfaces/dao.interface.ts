


export interface DAOinterface{

    tableName:string;
    
    insert(object:any):boolean;
    update(object:any):boolean;
    delete(id:number):boolean;
    find(id:number):any;
    findAll():[any];

    
}