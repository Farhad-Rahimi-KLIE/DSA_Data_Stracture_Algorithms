console.log(getChars("I like javascript"));
function getCharsCode(s){
 let ar = [];
 for(let i=0: i<s.length; i++){
  let code = s.charCodeAt(i)
  ar.push(code)
 }
 return ar
}