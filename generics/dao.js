"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
    }
    DAO.prototype.insert = function (obejct) {
        console.log('Inserindo ...');
        return false;
    };
    DAO.prototype.update = function (object) {
        return true;
    };
    DAO.prototype.delete = function (id) {
        return false;
    };
    DAO.prototype.find = function (id) {
        return null;
    };
    DAO.prototype.findAll = function () {
        return null;
    };
    return DAO;
}());
exports.DAO = DAO;
//# sourceMappingURL=dao.js.map