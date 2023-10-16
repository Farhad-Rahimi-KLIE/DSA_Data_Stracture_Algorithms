function Missing_Positive(data){
 let da = data[0];
 let rr = [];
 for(let i=0; i<n; i++){
  if(data[i]>da){
   rr.push(data[i]+1)
  }
 }
 return rr;
}
let data = [1,2,0];
let n = data.length;
console.log(Missing_Positive(data))