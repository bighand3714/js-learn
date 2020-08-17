function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    //创建script标签
    let script = document.createElement("script");
    //将回调函数挂在window上
    window[callback] = function (data) {
      resolve(data);
      document.body.removeChild(script);
    };
    //回调函数加在请求地址上
    params = { ...params, callback };
    let arr = [];
    for (let key in params) {
      arr.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arr.join("&")}`;
    document.body.appendChild(script);
  });
}
