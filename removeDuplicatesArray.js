let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(arr));

function removeDuplicates(nums) {
  let start = 0,
    end = 1;
  let count = 0;
  while (end <= nums.length - 1) {
    if (nums[start] === nums[end]) {
      end++;
    } else {
      nums[++count] = nums[end];
      start = end;
      end = end + 1;
    }
  }
  while (count < end - 1) {
    count++;
    nums.pop();
  }
  return nums;
}
