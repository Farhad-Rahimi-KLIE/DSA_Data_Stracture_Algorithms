let data1 = [1,3];
let data2 = [2];
let data3 = [];
for(let i=0; i<data1.length; i++){
 data3[i]=data1[i]
} 
for(let i=0; i<data2.length; i++){
 let start = data3[0];
 let end = data3.length-1;
 let mad = Math.floor(start+end/2);
 data3[data1.length+i]=data2[i]
}
console.log(data3.sort())