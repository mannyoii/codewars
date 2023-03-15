function countPositivesSumNegatives(input) {
  // your code here
  if (input === null || input.length === 0) return [];

  let positiveCount = 0;
  let sumOfNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else {
      sumOfNegatives += input[i];
    }
  }
  return [positiveCount, sumOfNegatives];
}
