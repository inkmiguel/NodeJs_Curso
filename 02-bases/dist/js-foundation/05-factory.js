"use strict";
// const { getUUID } = require('../plugins/get-id.plugin');
// const {getAge} = require('../plugins/get-age.plugin');
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            Id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = {name: 'Jhon', birthdate: '2005-01-03'};
// const john = BuildPerson(obj)
// console.log(john)
