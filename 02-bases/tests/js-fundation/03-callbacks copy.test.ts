import {getUserById} from '../../src/js-foundation/03-callbacks copy';

describe('03-callbacks',()=>{
    test('getUserById shoud return an error if user does not exist',(done)=>{
        const id =10;
        getUserById(id,(err,user)=>{
            expect(err).toBe(`User not found with id: ${id}`);
            expect(user).toBeUndefined();
            done();
        });
        
    });
    test('getUserById shoud return John Doe',(done)=>{
        const id =1;
        getUserById(id,(err,user)=>{

            const {id,name} = user!;

            expect(err).toBe(undefined);
            expect(user).toEqual({
                id,
                name
            })
            done();
            
        });
        
    });
});