// javascript algorithms 
function FindMissing(data,n){
let total = Math.floor((n+1)*(n+2)/2);
for(let i=0; i<n; i++){
 total-=data[i]
}
return total;
}
let data = [1,2,4,6,3,7,8];
let n = data.length;
let result = FindMissing(data,n);
console.log(result)
