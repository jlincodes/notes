// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// Example 1:
//
// Given nums = [1,1,1,2,2,3],
//
// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
//
// It doesn't matter what you leave beyond the returned length.
// Example 2:
//
// Given nums = [0,0,1,1,1,1,2,3,3],
//
// Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
//
// It doesn't matter what values are set beyond the returned length.

const removeDuplicates = (nums) => {
  let counter = 2;
  for (let i = 2; i < nums.length; i++) {
    const prevPrev = nums[counter - 2];
    const prev = nums[counter - 1];
    const curr = nums[i];
    if ((prev !== curr && prevPrev !== curr) || (prev === curr && prevPrev !== curr)) {
      nums[counter] = nums[i];
      counter ++;
    } else if (prev !== curr && prevPrev === curr) {
      counter ++;
    }
  }
  // console.log(nums);
  return counter;
};

console.log(removeDuplicates([1,1,1,2,2,3]) === 5);
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]) === 7);
