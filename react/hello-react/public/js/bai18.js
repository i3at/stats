var Note = React.createClass({
    render: function(){
        return (
            <p> {this.props.children} </p>
        );
    }
});

var List = React.createClass({
    add: function(){
        var input = this.refs.input.value;
        this.state.arr.push(input);
        this.setState(this.state);
    },
    //
    getInitialState: function() {
        return {
            arr: ['Once', 'Two', 'Three']
        };
    },
    render: function(){
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={this.add}> Add </button>
                {
                    this.state.arr.map(function(note, index){
                        return <Note key={index}>{note}</Note>
                    })
                }
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <List/>
    </div>,
    document.getElementById('root')
);