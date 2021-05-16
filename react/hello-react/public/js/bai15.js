var BigButton = React.createClass({
    update: function(){
        this.state.number = this.state.number + 1;
        this.setState(this.state);
    },
    // 
    getInitialState: function(){
        return {
            number: 1
        };
    },
    render: function(){
        return (
            <div>
                <button onClick={this.update} ref="btnHello">Hello {this.state.number}</button>
                <br/>
                <br/>
                <h4>Bai 15 - Bai tap 1</h4>
            </div>
        );
    }
});


ReactDOM.render(
    <div>
        <BigButton/>
    </div>,
    document.getElementById("root")
);