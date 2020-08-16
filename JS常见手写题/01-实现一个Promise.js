const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

class MyPromise {
  constructor(executor) {
    this.state = PENDING
    this.value = null
    this.reason = null
    this.onFulfilledCallBacks = []
    this.onRejectedCallBacks = []

    let resolve = value => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        this.onFulfilledCallBacks.forEach((func) => {
          func()
        })
      }
    }

    let reject = reason => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.onRejectedCallBacks.forEach((func) => {
          func()
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  /**
   * 异步调用和链式调用
   *
   * @param {*} onFulfilled
   * @param {*} onRejected
   * @returns
   * @memberof MyPromise
   */
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : value => value
    onRejected =
      typeof onRejected === "function" ? onRejected : reason => {
        throw reason
      }
    let promise2 = new Promise((resolve, reject) => {
      switch (this.state) {
        case FULFILLED:
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              resolve(x)
            } catch (e) {
              reject(e)
            }
          }, 0)
          break
        case REJECTED:
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
              resolve(x)
            } catch (e) {
              reject(e)
            }
          }, 0)
          break
        case PENDING:
          this.onFulfilledCallBacks.push(() => {
            setTimeout(() => {
              try {
                const x = onFulfilled(this.value)
                resolve(x)
              } catch (e) {
                reject(e)
              }
            }, 0)
          })
          break
      }
    })
    return promise2
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(fn) {
    return this.then(value => {
      fn()
      return value
    }, reason => {
      fn()
      return reason
    })
  }

  /**
   * 失败原因的是第一个失败 promise 的结果
   * iterable 可迭代对象必须具有Symbol.Iterator属性，属性值为一个函数，
   返回一个迭代器 iterator，迭代器指的是拥有next方法的对象。
   Iterator 接口主要供for...of消费，比如：Array、Map、Set
   * 静态方法，不会被实例继承，直接由类调用
   * @static
   * @param {*} iterable
   * @returns
   * @memberof MyPromise
   */
  static all(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function") {
      throw "传入参数必须是可迭代对象！"
    }
    return new Promise((resolve, reject) => {
      let resArr = [],
        iterableLen = iterable.length,
        count = 0
      for (let i = 0; i < iterableLen; i++) {
        Promise.resolve(iterable[i])
          .then((value) => {
            count++
            resArr[i] = value
            if (count === iterableLen) {
              resolve(resArr)
            }
          })
          .catch((e) => {
            reject(e)
            return
          })
      }
    })
  }

  /**
   * 它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。
   * Promise.resolve(value) 如果value是一个 promise ，那么将返回这个 promise
   * @static
   * @param {*} iterable
   * @returns
   * @memberof MyPromise
   */
  static race(iterable) {
    if (typeof iterable[Symbol.iterable] !== "function") {
      throw "传入参数必须是可迭代对象！"
    }
    return new Promise((resolve, reject) => {
      for (let i = 0; i < iterable.length; i++) {
        Promise.resolve(iterable[i])
          .then((value) => {
            resolve(value)
            return
          })
          .catch((e) => {
            reject(e)
            return 
          })
      }
    })
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
}