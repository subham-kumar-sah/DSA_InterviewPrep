const arr = [9, 7, 9, 1, 7, 6, 9];

console.log(SecondLargest(arr));

//O(n) Solution
function SecondLargest(arr) {
  let first = -1;
  let second = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
      continue;
    }
    if (second <= arr[i] && arr[i] < first) {
      second = arr[i];
    }
  }
  return first !== second ? second : -1;
}

//nLog(n) Solution
// function SecondLargest(arr){
//   arr.sort((a,b)=> {return a-b}); // 2 2 4 5 7 9 9 60
//   let i = arr.length - 1;
//   while(i>0 && arr[i] === arr[i-1]){
//     i--;
//   }
//   return i === 0 ? -1: arr[i-1];
// }
