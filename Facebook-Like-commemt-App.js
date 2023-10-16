const posts = [
 {
  id:"_1",
  author:"Farhad",
  content:"Javascript",
  reactions :{
   like:50,
   love:100,
   haha:5,
   wow:2,
   sad:1,
  }
 }
 {
 id:"_2",
 author:"Almas",
 content:"Python",
 reactions :{
 like:60,
 love:200,
 haha:6,
 wow:4,
 sad:2,
 }
 }
]
const = IncreamentCount = (postid,reactionType){
 let post = posts.find((v)=>{
  return v.id === postid;
 })
 post.reactions[reactionType]+=1;
 console.log(`${reactionType} ${postid}`)
}
IncreamentCount("_1","like");
console.log(posts[0].reactions.like)