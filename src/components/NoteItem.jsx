import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} body={body} date={createdAt} />
            <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived}/>
        </div>
    )
}

export default NoteItem;