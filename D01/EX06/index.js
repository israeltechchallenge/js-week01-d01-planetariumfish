function moduloEx6(number, comparer) {
  const modulo = number % comparer;
  let response = "";

  if (number > comparer) {
    response = `The number ${number} is bigger than ${comparer}`;
    if (modulo > 0) {
      response += `. But the modulo of ${number} % ${comparer} is ${modulo}`;
    }
  } else if (number === comparer) {
    response = `The number ${number} is equal to ${comparer}`;
  } else {
    response = `The number ${number} is less than ${comparer}`;
  }

  return response;
}

const output = document.getElementById("output");

output.innerText = moduloEx6(8, 3);
