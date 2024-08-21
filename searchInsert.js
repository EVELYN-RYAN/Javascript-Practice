var searchInsert = function(nums, target) {
    if (nums.indexOf(target) === -1){
        for (let i = 0; i < nums.length; i++) {
            if (target <= nums[i] ){
                return i
            }
        }
        return nums.length
    }
    else return nums.indexOf(target)
};

let nums = [1,3,5,6]
let target = 4
console.log(searchInsert(nums,target))