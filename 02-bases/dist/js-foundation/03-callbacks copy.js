"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
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
function getUserById(id, callbacks) {
    const user = users.find(function (users) {
        return users.id === id;
    });
    if (!user) {
        return callbacks(`User not found with id: ${id}`);
    }
    return callbacks(undefined, user);
}
