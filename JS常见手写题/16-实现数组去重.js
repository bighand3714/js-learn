// ES6
const unique1 = (arr) => [...new Set(arr)]

// filter + indexOf
const unique2 = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index)

// Map 【 不建议用 Object,因为 key 只能是 string 或 symbol 类型 】
const unique3 = (arr) => {
  const map = new Map()
  return arr.filter((item) => {
    if (map.has(item)) {
      return false
    } else {
      map.set(item, true)
      return true
    }
  })
}

// indexOf + lastIndexOf 【 只要数字出现了重复次，就将其移除掉 】
const unique4 = (arr) =>
  arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))

const arr = ['NaN', 'NaN', { a: 1 }, { b: 2 }, '{ a: 1 }']
console.log(unique3(arr))