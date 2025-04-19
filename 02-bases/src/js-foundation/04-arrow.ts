interface User{
    id:number,
    name: string;
}

const users:User[] = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]

export const getUserById=(id:number,callbacks: (err?: string, user?: User)=> void)=>{
    const user = users.find((users)=> users.id === id);

    (user) 
        ? callbacks (undefined,user) 
        :callbacks(`Usuario no encontrado por id ${id}`);
}

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
    getUserById,
}