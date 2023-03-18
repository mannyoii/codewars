var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let catYears = 15;
  let dogYears = 15;
  if (humanYears > 1) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears > 2) {
    for (let i = 2; i < humanYears; i++) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};
