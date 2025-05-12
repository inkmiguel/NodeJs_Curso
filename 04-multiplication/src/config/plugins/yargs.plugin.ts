import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base for multiplication table'
    })
    .options('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'List the multiplication table in console'
    })
    .options('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show the multiplication table in console'
    })
    .check((argv, options)=>{
        if (argv.b < 1) throw 'Base must be greater than 0';
        return true;
    })
    .parseSync(); 