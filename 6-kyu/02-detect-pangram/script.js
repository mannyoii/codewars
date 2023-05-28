function isPangram(str) {
  // Convert the string to lowercase and remove all non-alphabetic characters
  const cleanStr = str.toLowerCase().replace(/[^a-z]/g, "");

  // Create a Set object to keep track of unique letters in the string
  const uniqueLetters = new Set();

  // Iterate over each character in the clean string and add it to the Set
  for (const char of cleanStr) {
    uniqueLetters.add(char);
  }

  // Check whether the Set contains all 26 letters of the alphabet
  return uniqueLetters.size === 26;
}
