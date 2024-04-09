//O(n) Solution
let nums = [2, 5, 7, 6, 8];
let target = 12;
console.log(twoSum(nums, target));

function twoSum(arr, target) {
  let m1 = new Map();
  for (let i = 0; i < arr.length; i++) {
    m1.set(arr[i], i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (m1.get(target - arr[i]) !== undefined && target - arr[i] !== i)
      return [arr[i], target - arr[i]];
  }
}

// O(nlogn) Solution:
// Two pointer After sorting;
