Array.prototype.reduceToFilter = function(handler){
  return this.reduce((pre,cur,index)=>{
    if(handler.call(this,cur,index)){
      pre.push(cur);
    }
    return pre;
  },[])
}

const testArr = ["winnie", "lxm", "ljc"];
const res = testArr.reduceToFilter((item) => {
  return item === 'lxm'
});
console.log(res);