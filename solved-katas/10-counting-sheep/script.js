function countSheeps(arrayOfSheep) {
  let present = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      present += 1;
    }
  }
  return present;
}
