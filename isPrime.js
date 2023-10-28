function isPrime(n){
 if(n<2){
  return false;
  if(n==2){
   return true;
   
   var maxDiv = Math.sqrt(n);
   
   for(let i=2; i<maxDev; i++){
    if(n%i==0){
     return false;
    }
   }
   return true;
  } 
 }
}
console.log(2,"is Prime ?", isPrime(2))
console.log(3,"is Prime ?", isPrime(3))
console.log(4,"is Prime ?", isPrime(4))
console.log(5,"is Prime ?", isPrime(5))