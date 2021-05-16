var ReactDOM = require('react-dom');
var React = require('react');
// var createReactClass = require('create-react-class');

// var Note = createReactClass({
//     delete(){
//         this.props.remove(this.props.index);
//     },
//     render: function(){
//         return(
//             <div>
//                 <p>{this.props.children}</p>
//                 <button onClick={this.delete}>Delete</button>
//             </div>
//         );
//     }
// });

// var NoteForm = createReactClass({
//     add(){
//         var input = this.refs.input_note.value;
//         this.refs.input_note.value = "";
//         this.props.addNote(input);
//     },
//     render: function(){
//         return (
//             <div>
//                 <input type="text" ref="input_note" placeholder="Enter your note"/>
//                 <button onClick={this.add}>Add</button>
//             </div>
//         );
//     }
// });

// var List = createReactClass({
//     add(text){
//         this.state.taskArr.push(text);
//         this.setState(this.state);
//     },
//     delete(index){
//         this.state.taskArr.splice(index, 1);
//         this.setState(this.state);
//     },
//     getInitialState: function(){
//         return {
//             taskArr: ['Android', 'iOS', 'Windows']
//         }
//     },
//     render: function(){
//         return (
//             <div>
//                 <NoteForm addNote={this.add}/>
//                 {this.state.taskArr.map((e, i) => {
//                     console.log(this);
//                     return <Note key={i} remove={this.delete} index={i}>{e}</Note>
//                 })}
//             </div>
//         );
//     }
// });

var List = require('./comps/List.jsx');

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);