var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
       while (nums[i] === val){nums.splice(i,1)}
    }
    console.log(nums)
    return nums.length
};
var nums = [0,1,2,2,3,0,4,2]
var val = 2
console.log(removeElement(nums,val))
var to = 1