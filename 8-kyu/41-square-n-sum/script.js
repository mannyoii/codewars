function squareSum(numbers) {
  const squareNumbers = numbers.map((x) => x ** 2);
  const sum = squareNumbers.reduce((x, y) => x + y, 0);
  return sum;
}
