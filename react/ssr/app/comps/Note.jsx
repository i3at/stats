var React = require('react');
var createReactClass = require('create-react-class');

var Note = createReactClass({
    delete(){
        this.props.remove(this.props.index);
    },
    render: function(){
        return(
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.delete}>Delete</button>
            </div>
        );
    }
});

module.exports = Note;