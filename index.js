//Your code here
function justInvoke(fn){
this.fn = fn
}
function serve(){
  console.log(${this.fn});
}
const f = new justInvoke("malia")
serve.call()