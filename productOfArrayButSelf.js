// The main concept we will follow is of prefix product and suffix product.
// To optimise we calculate the prefix product in output arr and then multiply suffix product with help of product variable.

const arr = [1, 2, 3, 4];

console.log(productExceptSelf(arr));

function productExceptSelf(nums) {
  // let prefixArr = [1], suffixArr = [1];
  let outputArr = [1];
  // for(let i=1;i<nums.length;i++){
  //     prefixArr.push(prefixArr[i-1]*nums[i-1]);
  // }
  // for(let i=nums.length-2;i>=0;i--){
  //     suffixArr.unshift(suffixArr[0]*nums[i+1]);
  // }
  for (let i = 1; i < nums.length; i++) {
    outputArr.push(outputArr[i - 1] * nums[i - 1]);
  }
  let product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    outputArr[i] = outputArr[i] * product;
    product = product * nums[i];
  }
  return outputArr;
}
