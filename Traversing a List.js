// javascript algorithms 
function front() {
 this.pos = 0;
}
function end() {
 this.pos = this.listSize-1;
}
function prev() {
 if (this.pos > 0) {
 --this.pos;
 }
}
function next() {
 if (this.pos < this.listSize-1) {
 ++this.pos;
 }
}
function currPos() {
 return this.pos;
}
function moveTo(position) {
 this.pos = position;
}
function getElement() {
 return this.dataStore[this.pos];
}
