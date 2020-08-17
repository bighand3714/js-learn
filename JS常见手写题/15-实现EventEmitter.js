class MyEventEmitter {
  constructor() {
    this.events = Object.create(null);
  }

  addListener(type, listener) {
    if (!this.events[type]) {
      this.events[type] = [listener];
    } else {
      this.events[type].push(listener);
    }
  }

  removeListener(type, listener) {
    if (Array.isArray(this.events[type])) {
      if (listener) {
        this.events[type] = this.events[type].filter((item) => {
          return item !== listener && item.origin !== listener;
        });
      } else {
        delete this.events[type];
      }
    }
  }

  // 向事件队列添加事件，只执行一次
  once(type, listener) {
    const only = (...args) => {
      listener.apply(this, args);
      this.removeListener(type, listener);
    };
    only.origin = listener;
    this.addListener(type, only);
  }

  emit(type, ...args) {
    if (Array.isArray(this.events[type])) {
      this.events[type].forEach((listener) => {
        listener.apply(this, args);
      });
    }
  }
}

var emitter = new MyEventEmitter();

var onceListener = function (args) {
  console.log("我只能被执行一次", args);
};

var listener = function (args) {
  console.log("我是一个listener", args);
};

emitter.once("click", onceListener);
emitter.addListener("click", listener);

emitter.emit("click", "参数");
emitter.emit("click");