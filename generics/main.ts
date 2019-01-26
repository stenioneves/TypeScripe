import { DAO } from './dao';
import { Person } from '../aula/person';
import { DAOinterface } from './dao.interface';


let dao:DAOinterface<Person> =new DAO<Person>();

let p:Person = new Person('Steves');
dao.insert(p);