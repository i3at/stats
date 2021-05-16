var redux = require('redux');

var notes = require('./notes.js');
var isAdding = require('./isAdding.js');
// var tasks = require('./tasks.js');

var reducer = redux.combineReducers({ notes, isAdding /*,tasks*/ });

module.exports = reducer;