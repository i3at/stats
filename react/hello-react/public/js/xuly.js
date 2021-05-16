function showName(name){
    alert(name);
}

var Hello = React.createClass({
    increase: function(){
        // this.setState({size: this.state.size + 1});
        this.state.size = this.state.size + 1;
        this.setState(this.state);
    },
    laythongtin: function(){
        alert(this.props.ten + ' ' + this.props.children);
    },
    getInitialState(){
        return {
            size: parseInt(this.props.size),
            total: 9999
        };
    },
    render: function(){
        return(
            <div>
                <h1 className="mauvang"> That {this.props.ten} </h1>
                <div> Size: {this.state.size} </div>
                <p> Total: {this.state.total} </p>
                <p> {this.props.children} </p>
                <button onClick={()=>{ return showName(this.props.ten);}}> Thong tin </button>
                <button onClick={this.increase}> Increase </button>
                <Lession />
            </div>
        );
    }
});

var Lession = React.createClass({
    render: function(){
        return(
            <h3> Hello React JS </h3>
        );
    }
});

var InputTag = React.createClass({
    show(){
        var text = this.refs.sel.value;
        alert(text);
    },
    render(){
        return(
            <div>
                <input type="text" ref="txt"/>
                <button onClick={this.show}> Show </button>
                <br/>
                <select ref="sel">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <InputTag/>
        <Hello ten="ReactJS" size="10"> ReactJS Child </Hello>
        <Hello ten="NodeJS"  size="20"> NodeJS Child </Hello>
    </div>
    , document.getElementById("root")
);