$(document).ready(function() {
  // Load page with first quote autofill
  $.getJSON(url, getQuote);
});

var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var currentQuote = '';
var currentAuthor = '';
  //Background images
var colors = ["https://www.houseofhackney.com/blog/wp-content/uploads/2013/12/palmeral-linen-white-bg2.jpg", "http://www.peopleofprint.com/wp-content/uploads/2014/10/hoh005.jpg", "http://www.peopleofprint.com/wp-content/uploads/2014/10/hoh001.jpg"];
  //Matching buttons
var buttonColors = ["#435839", "#0E191F", "#CC1C31"];

  //Change background image
var i = 0;

function getColor(arr) { 
    i = (++i) % arr.length;
    $('#background').css('background-image', 'url('+ arr[i] +')');
}

  //Change button colours
var count = 0

function newColor(arr) {
  count = (++count) % arr.length;
  $('.fa').css('color',arr[count]);
  $('#getQuote').css('background',arr[count]);
}

  //Get new quote
var getQuote = function(data) {
  currentQuote = $("#quoteBox").text("'" + data.quoteText + "'");
  currentAuthor = $("#author").text("- " + data.quoteAuthor);
 
  // if author property has no value  
  if (data.quoteAuthor === "") {
    currentAuthor = $("#author").text("- Unknown");
  }
  
  // pre-populate tweet with quote and author 
  $('#twitter-share').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data.quoteText + '" ' + data.quoteAuthor));  
}

$("#getQuote").click(function() {
  $.getJSON(url, getQuote);
  getColor(colors);
  newColor(buttonColors);
});
