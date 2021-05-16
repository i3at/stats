var albums = [
    "https://vozforums.com/images/smilies/Off/feel_good.gif",
    "https://vozforums.com/images/smilies/Off/sexy_girl.gif",
    "https://vozforums.com/images/smilies/Off/misdoubt.gif",
    "https://vozforums.com/images/smilies/Off/sweat.gif"
];

var AlbumAuto = React.createClass({
    autoUpdate: function(){
        // if (this.state.index == albums.length - 1) {
        //     this.state.index = 0;
        // } else {
        //     this.state.index = this.state.index + 1;
        // }
        this.state.index = this.state.index + 1;
        this.setState({index: this.state.index % albums.length});
        // this.setState(this.state);
        // console.log('index:', this.state.index);
        // this.refs.image.src = albums[this.state.index];
    },
    //
    getInitialState: function(){
        return {
            index: 0,
            running: false
        }
    },
    render: function(){
        // if (!this.state.running) {
        //     // this.setState({running: true});
        //     this.state.running = true;
        //     this.setState(this.state);
        //     console.log('setInterval');
        //     setInterval(this.autoUpdate, 1000);
        // }
        return(
            <div>
                <img src={albums[this.state.index]} ref="image"/> <hr/>
                <div>index: {this.state.index} </div>
            </div>
        );
    },
    componentDidMount: function(){
        setInterval(this.autoUpdate, 1000);
    }
});

ReactDOM.render(
    <AlbumAuto/>,
    document.getElementById("root")
);