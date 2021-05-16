var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('HomePage');
var Main = require('Main');
var Nav = require('Nav');
var Account = require('Account');
var Transaction = require('Transaction');

ReactDOM.render(
  <div>
    <Main/>
    <Account/>
    <Nav/>
    <Transaction/>
    <HomePage/>,
  </div>,
  document.getElementById('root')
);
