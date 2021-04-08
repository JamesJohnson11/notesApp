// Delete all notes from local storage
function deleteAllNotes() {
    alert("All notes have been deleted! Click 'Back' to create new notes." )
    localStorage.clear()
}


// Clear form after submission
function clearForm() {
    document.getElementById("note").value=""
}

