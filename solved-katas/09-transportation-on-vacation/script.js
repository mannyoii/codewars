let cost = 40;
let price;
function rentalCarCost(d) {
  if (d < 3) {
    return cost * d;
  } else if (d < 7) {
    return cost * d - 20;
  } else if (d >= 7) {
    return cost * d - 50;
  }
}
