/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  { quote: "I have been studying the traits and dispositions of the 'lower animals' (so called) and contrasting them with the traits and dispositions of man. I find the result humiliating to me.", source: "Mark Twain", citation: "Letters From Earth", tags: ['#TwainMan', '#FreightTwain']},
  { quote: 'Go so far away that you stop being afraid of not coming back.', source: 'Eve Ensler', citation: 'I Am an Emotional Creature: The Secret Life of Girls Around the World', year: 2010},
  { quote: "Live Long and Prosper", source: "Mr. Spock", citiation: "Star Trek", year: '1967', tags: ['#Trekkies', '#Vulcan', '#Space']},
  { quote: "Yadda Yadda Yadda", source: "Jerry Seinfeld", year: "1997", tags: ['#Yadda', '#NoSoupForYou']},
  { quote: 'We are what we pretend to be, so we must be careful about what we pretend to be.', source: 'Kurt Vonnegut', citation: 'Mother Night', tags: ['#KeepingIt100']}
]
console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var random = Math.floor(Math.random() * quotes.length);
  return(quotes[random ]);
}

getRandomQuote();
/***
 * `printQuote` function
***/
function printQuote(){
  var currentQuote = getRandomQuote();
  var html = ''
  var quoteDiv = document.getElementById('quote-box')
  html += '<p class="quote">' + currentQuote.quote 
  if ('tags' in currentQuote){
    
      html += '  ' + currentQuote.tags.join(', ')
  }
  html += '</p>'
  html += '<p class="source">' + currentQuote.source 
  if ('citation' in currentQuote) {
    html += '<span class="citation">' + currentQuote.citation + '</span>'
  }
  if ('year' in currentQuote){
    html += '<span class="year">' + currentQuote.year + '</span>'
  }
  html += '</p>'
  quoteDiv.innerHTML = html
  setRandomBackground()
  
}

function setRandomBackground(){
  var randomNumber = Math.floor(Math.random() * 6)
  if (randomNumber == 0){
    document.body.style.background = 'black';
  }else if (randomNumber == 1){
    document.body.style.background = 'blue';
  }else if (randomNumber == 2){
    document.body.style.background = 'green';
  }else if (randomNumber == 3){
    document.body.style.background = 'red';
  }else if (randomNumber == 4){
    document.body.style.background = 'purple';
  }else if (randomNumber == 5){
    document.body.style.background = 'yellow';
  }
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);