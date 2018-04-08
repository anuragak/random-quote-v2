// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//quotes array containing quote objects
quotes = [
  {quote: "We do not talk, we bludgeon one another with facts and theories gleaned from cursory readings of newspapers, magazines and digests.",
  source: "Henery Miller",
  year: "1945",
  tag: ["#communication"]
  },

  {quote:"Facts do not speak for themselves. They speak for or against competing theories. Facts divorced from theories or visions are mere isolated curiosities.",
  source: "Thomas Sowell",
  tag: ["#satistics", "#politics"]
  },

  {quote: "Sometimes when I'm talking, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Probably so we can think twice.",
  source: "Bill Watterson",
  citation: "Calvin and Hobbs",
  tag: ["#humour", "#thought"]
  },

  {quote: "Running a start-up is like chewing glass and staring into the abyss. After a while, you stop staring, but the glass chewing never ends.",
  source: "Elon Musk",
  tag: ["#capitalism","#reality"]
  },

  {quote: "Essentially, all models are wrong, but some are useful.",
  source: "George E. Box",
  citation: "Empirical Model-Building and Response Surfaces, p. 424, Wiley. ISBN 0471810339",
  year: "1987",
  tag: ["#maths"]
  },

  {quote: "Every form of addiction is bad, no matter whether the narcotic be alcohol, morphine or idealism.",
  source: "Carl G. Jung",
  tag: ["#moderation", "#psychology"]
  },

  {quote: "Miss Kelly, you know, when you wear my flower you make it beautiful.",
  source: "Elwood P. Dowd",
  citation: "Harvey",
  year: "1950",
  tag: ["#perspective"]
  },

  {quote: "A lie is just a great story that someone ruined with the truth.",
  source: "Barney Stinson",
  citation: "How I Met Your Mother",
  tag: ["#perspective"]
  },

  {quote: "Gentlemen, you had my curiosity... but now you have my attention.",
  source: "Calvin Candie",
  citation: "Django Unchained",
  year: "2012",
  tag: ["#marketing"]
  },

  {quote: "Science is a way of thinking much more than it is a body of knowledge.",
  source: "Carl Sagan",
  tag: ["#Science", "#methodology"]
  },

];

//retrieve a random number that differs from the last random number
function getNumber(){
  return (getNumber.number = Math.floor(Math.random() * quotes.length)) ===
  getNumber.lastNumber ? getNumber() : getNumber.lastNumber = getNumber.number;
};

//random number used to return a quote that differs from the last quote
function getRandomQuote(){
  return quotes[getNumber()];
}

//print out the quote object contents to a html container
function printQuote(){

  let randomQuote = getRandomQuote();

  html = `<p class="quote">${ randomQuote.quote }</p>
          <p class="source">${ randomQuote.source }`;
  if(randomQuote.citation){
    html += `<span class="citation">${ randomQuote.citation }</span>`
    };
  if(randomQuote.year){
    html += `<span class="year">${ randomQuote.year }</span>`
    };
  if(randomQuote.tag){
    html += `<span class="year"> ${ randomQuote.tag } </span></p>`
    };
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = getRandomColor();

};

// get a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//function called when page loads so that the default quote in
//index.html is overwritten.
printQuote()

//sets quote and color reload time.
window.setInterval(printQuote, 30000);
