/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const time_split = time.split(':')
  const hour = parseInt(time_split[0])
  if (hour < 12) {
    return `Good Morning`;
  }
  if (hour < 17) {
    return `Good Afternoon`;
  }
  if (hour < 24) {
    return `Good Evening`;
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(aString) {
  document.getElementById("greeting").innerHTML = aString
}