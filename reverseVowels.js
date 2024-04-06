let vowelStr = "leetcode";
//output: leotcede

console.log(ReverseVovels(vowelStr));

function ReverseVovels(str) {
  let start = 0,
    end = str.length - 1;
  const arr = str.split("");

  while (start < end) {
    let flagLeft = 0,
      flagRight = 0;
    if (
      str[start].toLowerCase() !== "a" &&
      str[start].toLowerCase() !== "e" &&
      str[start].toLowerCase() !== "i" &&
      str[start].toLowerCase() !== "o" &&
      str[start].toLowerCase() !== "u"
    ) {
      start++;
    } else {
      flagLeft = 1;
    }
    if (
      str[end].toLowerCase() !== "a" &&
      str[end].toLowerCase() !== "e" &&
      str[end].toLowerCase() !== "i" &&
      str[end].toLowerCase() !== "o" &&
      str[end].toLowerCase() !== "u"
    ) {
      end--;
    } else {
      flagRight = 1;
    }
    if (flagLeft === 1 && flagRight === 1) {
      let swap = arr[end];
      arr[end] = arr[start];
      arr[start] = swap;
      start++;
      end--;
    }
  }
  return arr.join("");
}
