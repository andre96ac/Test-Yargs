#!/usr/bin/env node

// import yargs, { boolean } from 'yargs'
// import {hideBin} from 'yargs/helpers'

// import yargs from "yargs";


const yargs = require('yargs')
// const hideBin = require('yargs/helpers')



// yargs(hideBin(process.argv)).command('test', 'make a test', (yargs) => {
//     return yargs.option('url', {
//         // alias: 'u',
//         // type: 'string',
//         type: "boolean"

//     })
//     .demandOption('url')
// },
// (args) => {

//     if(args.url){
//         console.log(args)
//         console.log(args.url)

//     }
// })
// // .demandCommand(1)
// .argv;


// .demandCommand(1)


// yargs.command({
//     command: 'test',
//     describe: 'comando prova',
//     builder: {
//          url: {
//             describe: 'url to show', 
//             demandOption: true,
//             type: 'string'
//          }
//         },
//     handler(argv: any){
//         console.log(argv);
//         console.log(argv['url'])
//     } 
// })
// .demandCommand(1)
// .parse()


yargs.command({

    //comando richiamabile usando quest'app
    command: 'encrypt',
    //descrizione del comando
    describe: 'Codifica una stringa numerica O alfabetica',

    //flags che mi apsetto
    builder: {

        //mi  aspetto il flag nome
        string:{
            //descrizione del flag
            describe: 'Stringa da crittografare, deve essere SOLO numerica, oppure SOLO alfabetica',
            //flag obbligatorio
            demandOption: true,
            //tipo
            type: 'string'
            
        },
        // key:{
        //     //descrizione del flag
        //     describe: 'Chiave di crittografia, deve corrispondere al tipo della stringa da codificare (SOLO numerica o SOLO alfabetica)',
        //     //flag obbligatorio
        //     demandOption: true,
        //     //tipo
        //     type: 'string'
            
        // }
    },

    //handler quando richiamerò il comando get
    handler(argv: any){
        console.log(argv);
        console.log(argv.string)
    }

})


yargs.parse();


