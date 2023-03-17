function points(games) {
  let x = 0;
  let y = 0;
  let point = 0;
  for (let i = 0; i < games.length; i++) {
    let gamesItem = games[i].split(":");
    x = Number(gamesItem[0]);
    y = Number(gamesItem[1]);
    if (x > y) {
      point += 3;
    } else if (x === y) {
      point += 1;
    }
  }
  return point;
}
