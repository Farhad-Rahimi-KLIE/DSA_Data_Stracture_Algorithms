let string = ["helllo" "fid","sususu","we"];
let longest = string[0];
for(let i=0; i<string; i++){
 if(string[i].length > longest.length){
  longest = string[i]
 }
}
console.log(longest)