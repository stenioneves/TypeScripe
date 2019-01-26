"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../aula/person");
var PersonDAO = /** @class */ (function () {
    function PersonDAO() {
    }
    PersonDAO.prototype.insert = function (person) {
        console.log('Inserindo ...' + person.toString());
        return false;
    };
    PersonDAO.prototype.update = function (person) {
        return true;
    };
    PersonDAO.prototype.delete = function (id) {
        return false;
    };
    PersonDAO.prototype.find = function (id) {
        return new person_1.Person('teste');
    };
    PersonDAO.prototype.findAll = function () {
        return [new person_1.Person('Stenio')];
    };
    return PersonDAO;
}());
exports.PersonDAO = PersonDAO;
//# sourceMappingURL=person-dao.js.map