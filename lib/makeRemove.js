const path = require("path");
const fs = require("fs");

function deleteNote(storedNotes, id) {
  let deleteNoteID = parseInt(id);
  storedNotes.splice(deleteNoteID, 1);

  for (let i = deleteNoteID; i < storedNotes.length; i++) {
    storedNotes[i].id = i.toString();
  }

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: storedNotes,
      },
      null,
      2
    )
  );
}

function makeNote(body, storedNotes) {
  const note = body;
  storedNotes.push(note); //pushing notes to storage

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: storedNotes,
      },
      null,
      2
    )
  );

  return note;
}

module.exports = {
  makeNote,
  deleteNote,
};
