// loading modules
const getNotes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


// define a shortcut for console.log
const log = console.log;

// testing validator
// log(validator.isEmail('cgyr@hotmail.com'));
// testing chalk
// log (chalk.bold.red.inverse('Wow this is weird'));


// setup yargs

yargs.version('1.0.1')

// create the add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log('Title: ' + argv.title)
        log ('Body: ' + argv.body)
    }
})
// create the read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        log('read a note')
    }
})
// create the list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function(){
        log('listing the notes')
    }
})
// create the read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        log('reading a note')
    }
})

log('parsing')



// print yargs argv

log(yargs.argv)
