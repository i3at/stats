var redux = require('redux');
var reducer = require('./reducer/reducer.js');

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(()=>{
    // var str = store.getState();
    // document.getElementById('p-detail').innerHTML = JSON.stringify(str);
    console.log('Change:', store.getState());
});

module.exports = store;