// Sum Numbers
function sum(numbers) {
  "use strict";
  let sum = 0;
  const mapNew = numbers.map((x) => (sum += x));
  return numbers.length === 0 ? 0 : sum;
}
