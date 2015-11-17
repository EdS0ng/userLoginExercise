'use strict';

$(document).ready(start);

function start() {
  var cookies = document.cookie;
  cookies = cookies.split(';');
  var startIdx = cookies[0].indexOf('=');
  $('.uName').text(cookies[0].slice(startIdx+1));
  $('.submit').click(edit);
}

function edit (){
  var email = $('#newEmail').val();
  var about = $('#newAbout').val();
  $.post('/turtles', {email: email, about: about})
  .done(function (data){
    console.log(data);
    $('.email').text(email);
    $('.about').text(about);
  })
}