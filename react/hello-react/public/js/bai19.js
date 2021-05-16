var albums = [
    "https://vozforums.com/images/smilies/Off/feel_good.gif",
    "https://vozforums.com/images/smilies/Off/sexy_girl.gif",
    "https://vozforums.com/images/smilies/Off/misdoubt.gif",
    "https://vozforums.com/images/smilies/Off/sweat.gif"
];

var Note = React.createClass({
    render: function(){
        return (
            <div>
                <div> {this.props.children} </div>
                <img src={this.props.imgSrc}/>
            </div>
        );
    }
});

var List = React.createClass({
    add: function(){
        var inputTxt = this.refs.inputText.value;
        var inputImg = this.refs.inputImg.value;
        this.state.arr.unshift({imgSrc: inputImg, text: inputTxt});
        this.setState(this.state);
    },
    //
    getInitialState: function() {
        return {
            arr: [
                {imgSrc: albums[0], text: "Zero"},
                {imgSrc: albums[1], text: "Once"},
                {imgSrc: albums[2], text: "Two"}
            ]
        };
    },
    render: function(){
        return (
            <div>
                <input type='text' ref='inputText' /> {/*value="Text"/>*/}
                <input type='text' ref='inputImg'  /> {/*value={albums[3]}/>*/}
                <button onClick={this.add}> Add </button>
                {
                    this.state.arr.map(function(note, index){
                        return <Note key={index} imgSrc={note.imgSrc}>{note.text}</Note>
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