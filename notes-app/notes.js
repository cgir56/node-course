const fs = require('fs')
const chalk = require('chalk')
const addNote = (title, body) => {
    const notes = loadNotes()
   
    debugger

    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        // add the note
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log( chalk.green.inverse('New note added!.'))
    } else{
        console.log(chalk.red.inverse('Note title already taken'))
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }

}
// remove note 
const removeNote = (title) => {
    // load notes.json into the notes array
    const notes = loadNotes()
    // filter for the note title 
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notesToKeep.length < notes.length){
        console.log(chalk.green.inverse('Note removed!.'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!.'))
    }
    
}

const listNotes = () => {
    console.log(chalk.blue.inverse('Your notes...'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.blue(note.title))
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if(noteToRead){
        console.log(chalk.blue.inverse(noteToRead.title))
        console.log(noteToRead.body)
    } else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
