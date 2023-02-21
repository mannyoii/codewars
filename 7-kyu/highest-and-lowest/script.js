function highAndLow(numbers) {
  // ...
  const arr = numbers.split(" ");
  const arrNum = arr.map((x) => parseInt(x));
  function compareNumbers(a, b) {
    return a - b;
  }
  const num = arrNum.sort(compareNumbers);
  return `${num[num.length - 1]}` + " " + `${num[0]}`;
}
