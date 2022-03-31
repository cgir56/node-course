const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // check for duplicate note by the title
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })
    const duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
