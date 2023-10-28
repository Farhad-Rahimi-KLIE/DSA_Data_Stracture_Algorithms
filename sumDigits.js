function sumDigits(n){
 let a = n.toString();
 let sum = 0;
 for(let char of s){
  let digit = parseInt(char);
  sum+=digit;
  
 }
 return sum
}

let sum = sumDigits(123445);
console.log("Sum: ", sum)