var pList;

var Note = React.createClass({
    save: function(){
        var that = this;
        console.log('text:', this.refs.editTxt.value);
        console.log('id:', this.props.id);
        $.post("/updateNote", {id: this.props.id, text: this.refs.editTxt.value}, function(data){
            pList.setState({taskList: data});
            that.setState({onEdit: false});
        });
    },
    cancel: function(){
        this.setState({onEdit: false});
    },
    delete: function(){
        $.post("deleteNote", {id: this.props.id}, function(data){
            pList.setState({taskList: data});
        });
    },
    edit: function(){
        this.setState({onEdit: true});
    },
    getInitialState: function(){
        return {
            onEdit: false,
        }
    },
    render: function(){
        if (this.state.onEdit) {
            return (
                <div className="div-note">
                    <input defaultValue={this.props.children} ref="editTxt"/>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            );
        } else {
            return (
                <div className="div-note">
                    <p>{this.props.children}</p>
                    <button onClick={this.delete}>Del</button>
                    <button onClick={this.edit}>Edit</button>
                </div>
            );
        }
    }
});

var InputDiv = React.createClass({
    save: function(){
        // pList.setState({taskList: pList.state.taskList.concat({text: this.refs.inputTxt.value})});
        // pList.state.taskList.push({text: this.refs.inputTxt.value});
        // pList.setState(pList.state);
        $.post("/addNotes", {note: {text: this.refs.inputTxt.value}}, function(data){
            pList.setState({taskList: data});
        })
        // Remove InputDiv
        ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    },
    render: function(){
        return (
            <div>
                <input type="text" ref="inputTxt" placeHolder="Enter your note"/>
                <button onClick={this.save}>Save</button>
            </div>
        );
    }
});

function addDivInput(){
    ReactDOM.render(<InputDiv/>, document.getElementById("div-add"));
}

var List = React.createClass({
    getInitialState: function(){
        pList = this;
        return {
            taskList: []
        }
    },
    render: function(){
        return (
            <div className="div-list">
                <button onClick={addDivInput} className="right">Add</button>
                <div id="div-add"></div>
                {
                    this.state.taskList.map(function(note, index){
                        console.log(note);
                        return (
                            <Note key={index} id={index}>{note.text}</Note>
                        );
                    })
                }
            </div>
        );
    },
    componentDidMount(){
        var that = this;
        $.post("/getNotes", function(data){
            that.setState({taskList: data})
        })
    }
});

ReactDOM.render(
    <div>
        <List/>
    </div>
    ,document.getElementById("root")
);