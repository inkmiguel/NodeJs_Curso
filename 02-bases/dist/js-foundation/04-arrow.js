"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];
const getUserById = (id, callbacks) => {
    const user = users.find((users) => users.id === id);
    (user)
        ? callbacks(undefined, user)
        : callbacks(`Usuario no encontrado por id ${id}`);
};
exports.getUserById = getUserById;
// function getUserById(id,callbacks){
//     const user = users.find(function(users){
//         return users.id === id;
//     });
//     if(!user){
//         return callbacks(`Usuario no encontrado por id ${id}`);
//     }
//     return callbacks (null,user);
// }
module.exports = {
    getUserById: exports.getUserById,
};
