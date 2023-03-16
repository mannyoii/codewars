function century(year) {
  // Finish this :)
  let num = year / 100;
  if (year % 100 === 0) {
    return num;
  } else {
    return Math.floor(num) + 1;
  }
}
