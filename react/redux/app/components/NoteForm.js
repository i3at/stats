import React from 'react';
var {connect} = require('react-redux')
import {toggle, addItem} from '../action.js'

class NoteForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        // dispatch({type: 'ADD_ITEM', item: this.refs.input.value});
        // dispatch({type: 'TOGGLE_IS_ADDING'});
        dispatch(addItem(this.refs.input.value));
        dispatch(toggle());
    }
    toggle(){
        var dispatch = this.props.dispatch;
        // dispatch({type: 'TOGGLE_IS_ADDING'});
        dispatch(toggle());
    }
    render(){
        if (this.props.isAdding) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text" ref="input" placeholder="Enter new note!"/>
                        <button>Add</button>
                    </form>
                </div>
            );
        }
        return (
            <button onClick={this.toggle.bind(this)}>+</button>
        );
    }
}

module.exports = connect(function(state){
    return {isAdding: state.isAdding}
}) (NoteForm);
