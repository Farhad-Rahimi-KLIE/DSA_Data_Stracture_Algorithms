// javascript algorithms 
let data = [1,2,3,4,5];
let newEl = 5;
let start = 0;
for(let i=4; i<data.length; i++){
 data[i]=data[i+1];
 data.length = data.length-1;
 data.unshift(5)
 console.log(data)
}
