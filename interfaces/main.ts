import { Person } from './../aula/person';
import { PersonDAO } from './person-dao';
import { DAOinterface } from './dao.interface';


let personDAO:DAOinterface= new PersonDAO();

let p :Person= new Person('Yure');
personDAO.insert(p);
