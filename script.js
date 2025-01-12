// Time -> O(n) | Space -> O(n)
function missingNumbers(nums) {
  
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    numsObj[nums[i]] = true;
  }
  let n = nums.length + 2;
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (numsObj.hasOwnProperty(i) === false) result.push(i);
  }
  return result;
}
