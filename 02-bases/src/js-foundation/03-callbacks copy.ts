interface User{
    id:number,
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]

export function getUserById( id: number, callbacks: (err?: string, user?: User) => void){
    const user = users.find(function(users){
        return users.id === id;
    });

    if(!user){
        return callbacks(`User not found with id: ${id}`);
    }
    return callbacks (undefined,user);
}
