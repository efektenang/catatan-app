import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({notes, archived, onDelete, onArchive, onAdd}) {
    return (
        <div className="note-app__body">
            <NoteInput addNote={onAdd}/>
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}/>
            <h2>Arsip Catatan</h2>
            <NoteList notes={archived} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}

export default NoteAppBody;