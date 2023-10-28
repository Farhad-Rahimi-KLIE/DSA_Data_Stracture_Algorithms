printPrimes(100);

function printPrimes(nPrimes){
 let n = 0;
 let i = 1;
 while(n < nPrimes){
  if(isPrime(i)){
   printInt(n, "-->", i);
   n++;
  } 
  i++;
 } 
}