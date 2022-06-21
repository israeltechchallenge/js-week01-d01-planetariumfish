function moduloEx5(number1, number2) {
  const modulo = number1 % number2;
  let response = "";

  if (number1 > number2) {
    response = `The number ${number1} is bigger than ${number2}`;
    if (modulo > 0) {
      response += `. But the modulo of ${number1} % ${number2} is ${modulo}`;
    }
  } else if (number1 === number2) {
    response = `The number ${number1} is equal to ${number2}`;
  } else {
    response = `The number ${number1} is less than ${number2}`;
  }

  console.log(response);
}

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
