function sumMix(x) {
  let newArr = x.map((x) => Number(x));
  const sum = newArr.reduce((x, y) => x + y, 0);
  return sum;
}
