// loading modules
const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')


// define a shortcut for console.log
const log = console.log;

// testing validator
// log(validator.isEmail('cgyr@hotmail.com'));
// testing chalk
// log (chalk.bold.red.inverse('Wow this is weird'));


// setup yargs

yargs.version('1.0.1')
// log (yargs.argv)

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
    handler(argv) {notes.addNote(argv.title, argv.body)}
})
// create the remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.removeNote(argv.title)}
})
// create the list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler() {
        notes.listNotes()    
    }
})
// create the read command
yargs.command({ 
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()