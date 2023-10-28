console.log(SumCSV("1.2,6.8,4.6,2.9,1.2"));

function SumCSV(s){
 let ar = s.split(",");
 let sum = 0;
 for(let n of ar){
  sum+= parseFloat(n)
 }
 return sum
}