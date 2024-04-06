const arr = [1, 2, 3, 4, 5, 6, 7];
const rotateKey = 3;

const reverse = (arr, start, end) => {
  while (start <= end) {
    let a = arr[start];
    arr[start++] = arr[end];
    arr[end--] = a;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;
  if (nums.length > 1) {
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
  }
  return nums;
};

console.log(rotate(arr, rotateKey));
