function removeExclamationMarks(s) {
  const regex = /!/g;
  return s.replace(regex, "");
}
