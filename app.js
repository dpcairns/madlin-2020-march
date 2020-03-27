// GET A BUNCH OF DOM ELEMENTS

// go get html elements by their ids
// we'll need all the inputs to get the words FROM the user
const riverInput = document.getElementById('river-name-input');
// we'll need spans to put the WORDS INTO the madlib
const riverSpan = document.getElementById('river-name-span');
// we'll need the container that holds the mad lib
const madlibContainer = document.getElementById('madlib-container');
// we'll need the container that holds all the inputs
const inputContainer = document.getElementById('input-container');
// we'll need button so we can add the event listener
const myButton = document.getElementById('button');

// ADD EVENT LISTENERS

function putAnswersIn() {
    // this event listener should . . .
    // GET the value of the inputs
    const riverInputValue = riverInput.value;
    // use the input values to SET the textContent of our spans
    riverSpan.textContent = riverInputValue;
    // hide the input container
    inputContainer.style.display = 'none';
    // reveal the mad lib container
    madlibContainer.style.display = 'block';
}

// add event listener to the button on the CLICK event
myButton.addEventListener('click', putAnswersIn);