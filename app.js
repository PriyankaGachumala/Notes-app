const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// customise yargs version
yargs.version('1.1.0')
//add, remove, read, list
//creating add command
yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//creating remove command
yargs.command({
    command: 'remove',
    describe : 'remove note',
    builder:{
        title: {
            describe: 'remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe:'list note',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe: 'read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
//console.log(yargs.argv)
