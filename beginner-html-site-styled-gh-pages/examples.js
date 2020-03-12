let myVar;
myVar = 3 // not necessary to use ;
let myOtherVar = 2 // combine both

/*
Functions are a way of packaging functionality that you wish to reuse.
When you need the procedure you can call a function, with the function name,
instead of rewriting the entire code each time.
*/
function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}
/*
The return statement tells the browser to return the result variable
out of the function so it is available to use. This is necessary because
\variables defined inside functions are only available inside those functions.
This is called variable scoping.
*/

// events and listeners from the DOM API
document.querySelector('html').onclick = function() { // anonymous func in this case is like call this routine
    alert('Ouch! Stop poking me!');
}
// onclick is an event listener/handler
// function specifies what happen at the occurence of the event
