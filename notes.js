const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return 'Your notes...'
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title)
    debugger
    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))  
    }
    else 
    {
        console.log(chalk.red.inverse('Duplicate notes found!! Note note added'))
    }
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

//remove function
const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('note removed'))
    }
    else{
        console.log(chalk.red.inverse('no note found'))
    }

    saveNotes(notesToKeep)
    
}

//list function
const listNotes = function(){
    const notes = loadNotes()
    console.log('notes list')
     notes.forEach((note) => {
        console.log(note.title)
    })
}

//read function
const readNote = function(title){
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)
    if(!findNote)
    {
        console.log('not found')    
    }
    else{
        console.log('Title: ' +findNote.title)
        console.log('Body: ' +findNote.body)

    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
