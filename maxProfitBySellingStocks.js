//O(n) Solution

const arr = [1, 2];
console.log("Maximum Profit:", maxProfit(arr));

function maxProfit(prices) {
  let minLeft = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minLeft) {
      minLeft = prices[i];
    }
    let profit = prices[i] - minLeft;
    if (maxProfit < profit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}

//O(n) - Time O(n) - Space by using Auxillary array to store max value starting from rightmost.
