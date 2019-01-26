"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var person_1 = require("../aula/person");
var dao = new dao_1.DAO();
var p = new person_1.Person('Steves');
dao.insert(p);
//# sourceMappingURL=main.js.map