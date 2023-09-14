import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemDate from "./NoteItemDate";
import NoteItemTitle from "./NoteItemTitle";

function NoteItemContent({title, body, date}) {
    return (
        <div className="note-item__content">
            <NoteItemTitle title={title}/>
            <NoteItemDate date={date}/>
            <NoteItemBody body={body}/>
        </div>
    )
}

export default NoteItemContent;