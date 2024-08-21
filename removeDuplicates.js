var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === nums[i+1]){
            nums.splice(i+1,1)
        }
    }
    console.log(nums)
    return nums.length
};

var nums = [0,0,1,1,1,2,2,2,4]; // Input array
var expectedNums = [0,1,2,4]; // The expected answer with correct length

let k = removeDuplicates(nums); // Calls your implementation

console.assert( k == expectedNums.length);
for (let i = 0; i < k; i++) {
    console.assert( nums[i] == expectedNums[i]);
}