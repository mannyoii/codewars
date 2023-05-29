const binaryArrayToNumber = (arr) => {
  const newArr = arr.reverse();
  let result = 0;
  for (let i = 0; i < newArr.length; i++) {
    result += 2 ** i * arr[i];
  }
  return result;
};
