function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  const smallest = numbers.reduce((a, b) => Math.min(a, b));
  const index = numbers.indexOf(smallest);
  const newArr = numbers.slice(0, numbers.length);
  newArr.splice(index, 1);
  return newArr;
}
