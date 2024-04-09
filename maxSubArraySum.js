let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(MaxSubArraySum(nums));

function MaxSubArraySum(arr) {
  let max_sum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max_sum) max_sum = sum;
    if (sum < 0) sum = 0;
  }
  return max_sum;
}
