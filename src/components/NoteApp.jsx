import React from 'react';
import { getInitialData } from '../utils';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            titleSearch: '',
        };
        
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note);
        this.setState({ notes });

    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]

            }
        });
    }

    onSearchHandler(event) {
        this.setState(() => {
            return {
                titleSearch: event.target.value,
            }
        });
    }

    render() {
        return (
            <div className='note-app'>
                <NoteAppHeader name="Catatan" onSearch={this.onSearchHandler} />
                <NoteAppBody notes={this.state.notes.filter((note) => note.archived === false).filter((note) => note.title.toLowerCase().includes(this.state.titleSearch.toLowerCase()))} archived={this.state.notes.filter((note) => note.archived === true)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onAdd={this.onAddNoteHandler} />
            </div>
        )
    }
}

export default NoteApp;
