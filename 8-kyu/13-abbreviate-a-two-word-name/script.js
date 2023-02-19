function abbrevName(name) {
  const initials = name.split(" ", 2);
  const firstLetter = initials[0][0];
  const secondLetter = initials[1][0];
  return firstLetter.toUpperCase() + "." + secondLetter.toUpperCase();
}
