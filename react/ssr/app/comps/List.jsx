var React = require('react');
var createReactClass = require('create-react-class');
var Note = require('./Note.jsx')
var NoteForm = require('./NoteForm.jsx')

var List = createReactClass({
    add(text){
        this.state.taskArr.push(text);
        this.setState(this.state);
    },
    delete(index){
        this.state.taskArr.splice(index, 1);
        this.setState(this.state);
    },
    getInitialState: function(){
        return {
            taskArr: ['Android', 'iOS', 'Windows']
        }
    },
    render: function(){
        return (
            <div>
                <NoteForm addNote={this.add}/>
                {this.state.taskArr.map((e, i) => {
                    console.log(this);
                    return <Note key={i} remove={this.delete} index={i}>{e}</Note>
                })}
            </div>
        );
    }
});

module.exports = List;