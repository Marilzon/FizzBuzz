const app = document.querySelector("#app");

function fizzBuzz(number) {
  if (number > 100) {
    return;
  }

  let isMultipleOfThree = number % 3 === 0;
  let isMultipleOfFive = number % 5 === 0;

  if (isMultipleOfThree && isMultipleOfFive) {
    let fizzBuzzElement = document.createElement("div");
    let text = document.createTextNode("FizzBuzz");
    fizzBuzzElement.appendChild(text);

    app.appendChild(fizzBuzzElement);
  }
  else if (isMultipleOfThree) {
    let fizzElement = document.createElement("div");
    let text = document.createTextNode("Fizz");
    fizzElement.appendChild(text);

    app.appendChild(text);
  }
  else if (isMultipleOfFive) {
    let buzzElement = document.createElement("div");
    let text = document.createTextNode("Buzz");
    buzzElement.appendChild(text);

    app.appendChild(text);
  }
  else {
    let defaultElement = document.createElement("div");
    let text = document.createTextNode(number);
    defaultElement.appendChild(text);

    app.appendChild(text);
  }
  fizzBuzz(number + 1);
}

fizzBuzz(1);
