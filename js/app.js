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
    fizzBuzzElement.classList.add("fizz-buzz");

    app.appendChild(fizzBuzzElement);
  }
  else if (isMultipleOfThree) {
    let fizzElement = document.createElement("div");
    let text = document.createTextNode("Fizz");
    fizzElement.appendChild(text);
    fizzElement.classList.add("fizz");

    app.appendChild(fizzElement);
  }
  else if (isMultipleOfFive) {
    let buzzElement = document.createElement("div");
    let text = document.createTextNode("Buzz");
    buzzElement.appendChild(text);
    buzzElement.classList.add("buzz");

    app.appendChild(buzzElement);
  }
  else {
    let defaultElement = document.createElement("div");
    let text = document.createTextNode(number);
    defaultElement.appendChild(text);

    app.appendChild(defaultElement);
  }
  fizzBuzz(number + 1);
}

function defaultBackgrounds() {

}

fizzBuzz(1);
