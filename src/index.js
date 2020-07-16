import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

let num = 1;

function tick() {
  $('#main').html(`You have been on this page for ${num} seconds`);
  num += 1;
}

setInterval(tick, 1000);
