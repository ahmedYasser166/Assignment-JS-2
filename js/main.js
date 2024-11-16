var cartona = "";
var quotes = [
  {
    text: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    text: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, 
  then you sure as hell don't deserve me at my best"`,
    author: "― Marilyn Monroe",
  },
  {
    text: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    text: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    text: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    text: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
    author: "― C.S. Lewis",
  },
];
var lastQuote = "";
function display() {
  var newQuote;
  do {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (newQuote === lastQuote);
  lastQuote = newQuote;
  cartona = `<p class="px-5">${newQuote.text}</p><p class="text-right"><em>${newQuote.author}</em></p>`;
  document.getElementById("demo").innerHTML = cartona;
}
