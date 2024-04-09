let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));

function maxArea(height) {
  let start = 0,
    end = height.length - 1;
  let maxArea =
    height[start] > height[end]
      ? (end - start) * height[end]
      : (end - start) * height[start];
  if (height.length > 2) {
    while (start < end) {
      height[start] >= height[end] ? end-- : start++;
      let area =
        height[start] > height[end]
          ? (end - start) * height[end]
          : (end - start) * height[start];
      if (area > maxArea) {
        maxArea = area;
      }
    }
    return maxArea;
  } else if (height.length === 2) {
    return (end - start) * (height[start] >= height[end] ? end : start);
  } else {
    return height[0];
  }
}
