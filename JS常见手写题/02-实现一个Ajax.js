function myAjax(url, method = 'get', params) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const paramsToString = paramStringify(params)
    if (method === "get" && paramsToString) {
      url = 
        url.indexOf("?") > -1
          ? `${url}${paramsToString}`
          : `${url}?${paramsToString}`
    }

    xhr.open(method, url) 
    // 窗体数据被编码为名称/值对,这是标准的编码格式。
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    // 发送请求之前，先绑定监听函数
    xhr.onload = function() {
      const result = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders(),
        data: xhr.response || xhr.responseText,
      }
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        resolve(result)
      } else {
        reject(result)
      }
    }
    xhr.onerror = function () {
      reject(new Error("请求出错"))
    }
    xhr.timeout = function () {
      reject(new Error("请求超时"))
    }
    xhr.onabort = function () {
      reject(new Error("请求被终止"))
    }

    if (method === "post") {
      xhr.send(paramsToString)
    } else {
      xhr.send()
    }
  })
}

function paramStringify(params) {
  let arr = []
  if (params) {
    Reflect.ownKeys(params).forEach((key) => {
      arr.push(`${key}=${params[key]}`)
    })
  }
  return arr.join("&")
}

const params = {
  name: "winnie",
  age: 18,
}
console.log(paramStringify(params))