function New(fn,...args){
  //创建一个新对象
  const obj = {};
  const constructor = fn;//获取构造函数
  //链接到原型
  obj.__proto__ = constructor.prototype;
  //绑定this
  const result = constructor.apply(obj,args);
  //返回新对象
  return result instanceof Object ? result : obj;
}

//更精简版
function _new(fn, ...args) {
   const obj = Object.create(fn.prototype);
   const res = fn.apply(obj, args);
   return res instanceof Object ? res : obj;
}