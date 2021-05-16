import React from 'react';

var Note = require('./Note');
var NoteForm = require('./NoteForm');
import {connect} from 'react-redux';

class List extends React.Component{
    render(){
        return (
            <div>
                <NoteForm/>
                {
                    this.props.notes.map((e, i) => <Note key={i} index={i}>{e}</Note>)
                }
            </div>
        );
    }
}

module.exports = connect(function(state){
    return {notes: state.notes}
})(List);
