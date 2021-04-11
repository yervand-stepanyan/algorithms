/* Direct Recursion */

const factorial = number => {
  if (typeof number === 'number' && Number.isInteger(number) && number > 0) {
    if (number === 1) {
      return number;
    } else {
      return number * factorial(number - 1);
    }
  } else if (
    typeof number === 'number' &&
    Number.isInteger(number) &&
    number === 0
  ) {
    return 1;
  } else {
    return 'Input should be type of a Number';
  }
};

/* Tail Recursion */

const tailRecursiveFactorial = (number, result = 1) => {
  if (typeof number === 'number' && Number.isInteger(number) && number > 0) {
    if (number === 1) {
      return result;
    } else {
      return tailRecursiveFactorial(number - 1, result * number);
    }
  } else if (
    typeof number === 'number' &&
    Number.isInteger(number) &&
    number === 0
  ) {
    return 1;
  } else {
    return 'Input should be type of a Number';
  }
};

export { factorial, tailRecursiveFactorial };
