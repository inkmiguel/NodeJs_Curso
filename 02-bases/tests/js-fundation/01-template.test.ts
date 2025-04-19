import {emailTempalte} from '../../src/js-foundation/01-template';

describe('js-fundation/01-template',()=>{
    test('emailTemplate should be contain a greeting',()=>{

        expect(emailTempalte).toContain('Hi,')
    });

    test('emailTamplate should contanin {{name}} and {{orderID}}',()=>{

        expect(emailTempalte).toMatch(/{{name}}/);
        expect (emailTempalte).toMatch(/{orderID}/);

        expect(emailTempalte).toContain('{{name}}');
        expect(emailTempalte).toContain('{orderID}');

    });
})