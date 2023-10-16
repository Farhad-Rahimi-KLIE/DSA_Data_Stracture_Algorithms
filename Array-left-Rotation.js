// javascript algorithms 
function Rotate(){
 let first = data.shift();
 let second = data.shift();
 let third = data.shift();
 data.push(first,second,third)
 return data
}
let data = [1,2,3,4,5,6,7,8];
console.log(Rotate(data))
