function Parent(val) {
  this.value = val;
}
Parent.prototype.getValue = function () {
  console.log(this.value);
};
function Child(val) {
  //继承父类属性
  Parent.call(this, val);
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true,
  },
}); //Object.create()方法创建一个新对象，使用现有对象来提供新建对象的__proto__