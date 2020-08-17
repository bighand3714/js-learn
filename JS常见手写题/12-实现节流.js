/* 
节流：一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。【 不会重新计时 】
应用场景：监听滚动事件，比如是否滑到底部自动加载更多。
*/

function throttle(handler, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        handler.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}
