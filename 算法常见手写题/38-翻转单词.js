var str = 'let us take leetcode content'
var middle = str.split(' ')
var result = middle.map((item, index) => {
  return item.split('').reverse().join('')
})

console.log(result.join(' '))

// 正则
var result2 = str.match(/\s/g).map(item => {
  return item.split('').reverse().join('')
}).join(' ')
console.log(result)

const word_reverse = str => str.match(/\S+/g).reverse().join(' ')

console.log(word_reverse(str))