console.log(getDistance(100,100,200,400));

function getDistance(x1,y1,x2,y2){
 let l1 = x2-x1;
 let l2 = y2-y1;
 return Math.sqrt(l1*l1 + l2 *l2);
}