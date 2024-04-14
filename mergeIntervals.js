const arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(arr));

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  let currentInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let nextInterval = intervals[i];
    if (currentInterval[1] >= nextInterval[0]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  result.push(currentInterval);
  return result;
}
