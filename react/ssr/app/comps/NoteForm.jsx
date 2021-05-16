var React = require('react');
var createReactClass = require('create-react-class');

var NoteForm = createReactClass({
    add(){
        var input = this.refs.input_note.value;
        this.refs.input_note.value = "";
        this.props.addNote(input);
    },
    render: function(){
        return (
            <div>
                <input type="text" ref="input_note" placeholder="Enter your note"/>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
});

module.exports = NoteForm;