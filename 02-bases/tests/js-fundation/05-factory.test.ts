import {buildMakePerson} from'../../src/js-foundation/05-factory'


describe ('js-foundation/05-factory.ts',() =>{
  
    const getUUID =() => '1234';
    const getAge =()=> 20;

    test('buildMakePearson should return a function', ()=>{
        const makePearson = buildMakePerson({getUUID,getAge});

        expect (typeof makePearson).toBe('function');
    });

    test('makePearson should return a person',()=>{

        const makePearson = buildMakePerson({getUUID,getAge})
        const johnDoe = makePearson({name: 'John Doe',birthdate: '1985-10-21'});

        expect(johnDoe).toEqual({
            Id:'1234',
            name:'John Doe',
            birthdate: '1985-10-21', 
            age:20
        })

    });

})