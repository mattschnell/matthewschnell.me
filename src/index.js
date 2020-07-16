import $ from 'jquery';
import './style.scss';

let num = 1;

function tick() {
  $('#main').html(`You have been on this page for ${num} seconds`);
  num += 1;
}

setInterval(tick, 1000);
