class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hocVien: 10,
        }
        this.increase = this.increase.bind(this);
    }
    increase(){
        this.setState({hocVien: this.state.hocVien + 1});
    }
    render(){
        return (
            <div>
                <p>{this.props.txt}</p>
                <p>So hoc vien: {this.state.hocVien}</p>
                {/* <button>Delete</button> */}
                {/* <button onClick={this.increase.bind(this)}>Increase</button> */}
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}
Note.defaultProps = {
    txt: "Empty txt"
}

ReactDOM.render(
    <div>
        <Note></Note>
        <Note txt="NodeJS"/>
    </div>,
    document.getElementById("root")
);