const getAgePlugin = require('get-age')

export const getAge = (birthdate:string)=>{

    // console.log({currentYear:new Date().getFullYear()});
    
    return new Date().getFullYear() - new Date(birthdate).getFullYear()
}
