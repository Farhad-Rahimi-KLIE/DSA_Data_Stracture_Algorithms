let numbers = [1,2,3,4,5,6,7,8,9,10];
let target = 9;
for(let i=3; i<numbers.length; i++){
 if(numbers[i]+numbers[i+1]==target){ 
  console.log(numbers[i]+numbers[i+1])
 }
}