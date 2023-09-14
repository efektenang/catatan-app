import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({name, onSearch}) {
    return(
        <div className="note-app__header">
            <h1>{name}</h1>
            <NoteSearch onSearch={onSearch}/>
        </div>
    )

}

export default NoteAppHeader;