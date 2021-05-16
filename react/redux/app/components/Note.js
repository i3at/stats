import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../action.js';

class Note extends React.Component{
    delete(){
        console.log('[Note] [delete]', this);
        var {index, dispatch} = this.props;
        // dispatch({type: 'REMOVE_ITEM', index});
        dispatch(removeItem(index));
    }
    render(){
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.delete.bind(this)}>Delete</button>
            </div>
        );
    }
}

module.exports = connect()(Note);
