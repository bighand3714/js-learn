(function(modules) {
  //...
})({
  './src/index.js': function (module, exports) {
    eval(
      'console.log("hello webpack"); \n\n\n//# sourceURL=webpack'
    )
  }
})

var installedModules = {}

function __webpack_require__(moduleId) {
  __webpack_require__.p = ""
  return __webpack_require__((__webpack_require__.s = './src/index.js'))
}

module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader"]
    }
  ]
}