// GET A BUNCH OF DOM ELEMENTS

// go get html elements by their ids

// we'll need all the inputs to get the words FROM the user
const riverInput = document.getElementById('river-name-input');
// we'll need spans to put the WORDS INTO the madlib

// we'll need the container that holds the mad lib

// we'll need the container that holds all the inputs

// we'll need button so we can add the event listener
const myButton = document.getElementById('button');

// ADD EVENT LISTENERS

function putAnswersIn() {
    // this event listener should . . .
    // GET the value of the inputs
    const riverInputValue = riverInput.value;
    // use the input values to SET the value of our spans
    console.log('something', riverInputValue);
    // hide the input container
    // reveal the mad lib container

}

// add event listener to the button on the CLICK event
myButton.addEventListener('click', putAnswersIn);