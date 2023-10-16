function FindMajority(data,n){
 let maxCount = 0;
 let index = -1;
 for(let i=0; i<n; i++){
  let count = 0;
  for(let j=0; j<n; j++){
   if(data[i]==data[j]){
    count++;
   }
   if(count>maxCount){
    maxCount = count;
    index = i;
   }
  }
 }
 if(maxCount>n/2){
  document.write(data[index])
 }else{
  document.write("No Majority Found...")
 }
}
let data = [1,1,2,1,3,5];
let n = data.length;
console.log(FindMajority(data,n))