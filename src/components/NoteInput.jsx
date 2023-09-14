import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            titleLength: 0,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        if (event.target.value.length <= 50) {
            this.setState((prevState) => {
                return {
                    title: event.target.value,
                    titleLength: (event.target.value).length,
                }
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className="note-input">
                <h2>Tambah Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa Karakter: {50 - this.state.titleLength}</p>
                    <input className='note-input__title' type='text' required placeholder="Judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" type="text" required placeholder="Apa yang ada dipikiran anda ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Simpan</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;