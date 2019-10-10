module.exports = function zeros(expression) {
  let countZeros = 0;
  const arr = expression.split('*');
  // console.log(arr);

  const findFives = (num) => {
    if (num % 5 !== 0) {
      return;
    }
    countZeros++;
    // console.log('num: ', num, 'zeros: ', countZeros);
    return findFives(num / 5);
  };

  const factorial = (n) => {
    // console.log(n);
    if (n === 1) {
      return 1;
    }
    findFives(n);
    return factorial(n - 1);
  };

  const factorialDouble = (n) => {
    // console.log(n);
    if (n <= 2) {
      return n;
    }
    findFives(n);
    return factorialDouble(n - 2);
  };

  arr.map((item) => {
    const num = parseInt(item);

    return item.indexOf('!!') === -1 ? factorial(num) : factorialDouble(num);
  });

  return countZeros;
}
