function squareDigits(num) {
  return Number(
    `${num}`
      .split("")
      .map((x) => x ** 2)
      .join("")
  );
}
