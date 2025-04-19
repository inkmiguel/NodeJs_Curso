import {getAge} from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {
    test('getAge() should return the correct age', () => {
        const birthdate = '1990-01-01';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');
    });

    test('should return current age',()=>{
        const birthdate = '1990-01-01';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculatedAge);
    })

    test('should return 0 years',()=>{

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2020);


        const birthdate = '2020-01-01';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
    })
})