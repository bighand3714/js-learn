# 面向对象

## 实例对象与new命令
* 构造函数，原型链
* new命令原理
* new.target

## this 关键字
* 使用环境
  * 全局
  * 构造函数
  * 对象的方法
* 注意点
  * 多层this
  * map, forEach
  * 回调函数
* 绑定：Function.prototype
  * call()
  * apply()
  * bind()

## 对象的继承
* Object.getPropertyOf()

## 严格模式
* (use strict);
* 报错：
  * string.length
  * 取值器属性
  * 拓展对象
  * eval, arguments保留字
  * 函数重名
  * 八进制前缀0表示法
* 全局变量显式声明
* 禁止：
  * this指向全局
  * fn.callee, fn.caller
  * arguments.callee, arguments.caller
  * 删除变量
  * with语句
* eval
* arguments
* 非函数代码块不得声明函数
* 保留字