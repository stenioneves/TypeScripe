"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.MostrarIdade = function (idade) {
        console.log(this.name + " tem " + idade + " anos");
    };
    Person.prototype.toString = function () {
        return "Class Person, name " + this.name;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map