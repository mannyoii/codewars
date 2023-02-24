function solution(str) {
  const arr = str.split("");
  const reversed = arr.reverse();
  const reversedStr = reversed.join("");
  return reversedStr;
}
