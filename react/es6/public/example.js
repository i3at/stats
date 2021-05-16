class Note extends React.Component{
    delete() {
        this.props.remove(this.props.index);
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

class AddComp extends React.Component{
    add(){
        var input = this.refs.input.value;
        this.refs.input.value = '';
        this.props.add(input);
    }
    render(){
        return (
            <div>
                <input type="text" placeholder="Enter note!" ref="input"/>
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        );
    }
}

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            task: ["Ubuntu", "Windows", "iOS"]
        }
        // this.removeNote = this.removeNote.bind(this);
        this.addNote = this.addNote.bind(this);
    }
    addNote(txt){
        this.state.task.push(txt);
        this.setState(this.state);
    }
    removeNote(index){
        this.state.task.splice(index, 1);
        this.setState(this.state);
    }
    render(){
        return(
            <div>
                <AddComp add={this.addNote}/>
                {
                    this.state.task.map((e, i) => {
                        return <Note key={i} remove={this.removeNote.bind(this)} index={i}>{e}</Note>
                    })
                }
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <List/>
    </div>,
    document.getElementById("root")
);