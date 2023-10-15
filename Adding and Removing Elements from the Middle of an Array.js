var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
print(nums); // 1,2,3,4,5,6,7,8,9

var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
print(nums);