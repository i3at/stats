var albums = [
    "https://vozforums.com/images/smilies/Off/feel_good.gif",
    "https://vozforums.com/images/smilies/Off/sexy_girl.gif",
    "https://vozforums.com/images/smilies/Off/misdoubt.gif",
    "https://vozforums.com/images/smilies/emos/lol.gif"
];

var Album = React.createClass({
    gotoNext: function(){
        this.state.id = this.state.id + 1;
        if (this.state.id == albums.length) this.state.id = 0;
        this.setState(this.state);
        // this.refs.image.src = albums[this.state.id];
    },
    gotoPrev: function(){
        this.state.id = this.state.id - 1;
        if (this.state.id < 0) this.state.id = albums.length - 1;
        this.setState(this.state);
        // this.refs.image.src = albums[this.state.id];
    },
    //
    getInitialState: function(){
        return {
            id: 0
        }
    },
    render: function(){
        return (
            <div className="div-album">
                Bai 16 - Bai tap 2 <br/>
                ID: {this.state.id} <br/>
                <img src={albums[this.state.id]} ref="image"></img> <hr/>
                <button onClick={this.gotoPrev}>Prev</button>
                <button onClick={this.gotoNext}>Next</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Album/>
    </div>,
    document.getElementById("root")
);