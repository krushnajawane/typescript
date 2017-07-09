"use strict";
var person = (function () {
    function person(_service) {
        this._service = _service;
        this._service.addNumber(2, 3);
    }
    person.prototype.saveAddress = function () {
        return this.name;
    };
    return person;
}());
var calSer = (function () {
    function calSer() {
    }
    calSer.prototype.addNumber = function (a, b) {
        return a + b;
    };
    return calSer;
}());
