function arrayDiff(a, b) {
  let diff = a.filter((x) => !b.includes(x));
  console.log(diff);
  return diff;
}
