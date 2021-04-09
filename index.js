// Delete all notes from local storage
function deleteAllNotes() {
    alert("All notes have been deleted! Click 'Back' to create new notes." )
    localStorage.clear()
}


// Clear form after submission
function clearForm() {
    document.getElementById("note").value=""
}

// Get notes that exist in localStorage currently
function getExistingNotes() {
    let notes = localStorage.getItem('notes')
    if (!notes) {
        return null
    }
    return JSON.parse(notes)
}

//

function getNoteId() {
    let noteObject = getExistingNotes()
    if (!NoteObject) {
        return 1
    }
}