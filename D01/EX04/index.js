function modulo(number, comparer) {
  const modulo = number % comparer;

  if (number > comparer) {
    console.log(`The number ${number} is bigger than ${comparer}`);
  } else if (number === comparer) {
    console.log(`The number ${number} is equal to ${comparer}`);
  } else {
    console.log(`The number ${number} is less than ${comparer}`);
  }

  if (modulo > 0) {
    console.log(`The modulo of ${number} % ${comparer} is ${modulo}`);
  }
}

// Do not remove or change this line, or the tests won't work
export { modulo };
