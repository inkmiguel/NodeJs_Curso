// const { getUUID } = require('../plugins/get-id.plugin');
// const {getAge} = require('../plugins/get-age.plugin');

// const{getAge,getUUID} = require('../plugins')

interface buildMakerPersonOptions{
    getUUID: () => string,
    getAge: (birthdate: string) => number;
}

interface PersonOptions{
    name: string,
    birthdate: string;
}

export const buildMakePerson = ({getUUID,getAge}:buildMakerPersonOptions) => {
    return ({ name, birthdate }:PersonOptions) => {
        return {
            Id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}

// const obj = {name: 'Jhon', birthdate: '2005-01-03'};

// const john = BuildPerson(obj)

// console.log(john)
