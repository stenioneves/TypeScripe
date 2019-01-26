"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../aula/person");
var person_dao_1 = require("./person-dao");
var personDAO = new person_dao_1.PersonDAO();
var p = new person_1.Person('Yure');
personDAO.insert(p);
//# sourceMappingURL=main.js.map