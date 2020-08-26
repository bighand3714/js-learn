// 源代码

// 存储最后的结果
let res = []

// 标识列
let col = []

// 标识主对角线
let dia1 = []

// 标识副对角线
let dia2 = []

// 根据结果生成棋盘
let generateBoard = (n, row) => {
  // 生成一个n*n的全部为.的数组
  let board = []
  for (let i = 0; i < n; i++) {
    board.push(Array(n).fill(' .'))
  }
  // 将对应位置放入皇后
  for (let i = 0; i < n; i++) {
    board[i][row[i]] = ' Q'
  }
  return board
}

// console.log(generateBoard(4, [0, 2, 3, 1]))

// 尝试在一个n皇后问题中，摆放第index行皇后位置
let putQueen = (n, index, row) => {
  // 如果行数为n说明得到了n皇后的一个解，将解放入结果数组中
  if (index == n) {
    res.push(generateBoard(n, row))
  }
  // 遍历列
  for (let i = 0; i < n; i++) {
    // 尝试在第index行的皇后摆放在第i列
    // 主对角线用index + i作为下标
    // 副对角线使用index - i + n - 1作为下标
    if (!col[i] && !dia1[index + i] && !dia2[index - i + n - 1]) {
      // 将当前位置放置皇后
      row.push(i) 
      col[i] = true
      dia1[index + i] = true
      dia2[index - i + n - 1] = true
      
      // 解决更小规模问题
      putQueen(n, index + 1, row)
      // 进行回滚
      col[i] = false
      dia1[index + i] = false
      dia2[index - i + n - 1] = false
      row.pop(i)
    }
  }
}

// 解决n皇后
let solveNQueens = n => {
  // 初始化
  res = []
  // n个列
  col = Array(n).fill(false)
  // 2 * n - 1个主对角线与副对角线
  dia1 = Array(2 * n - 1).fill(false)
  dia2 = Array(2 * n - 1).fill(false)

  let row = []
  putQueen(n, 0, row)
}

// 定义规模
const n = 4

// 执行n皇后
solveNQueens(n)

console.log(res)

// 打印结果
res.forEach(item => {
  item.forEach(row => {
    let cols = ''
    row.forEach(col => {
      cols += col
    })
    // 打印一行
    console.log(cols)
  })

  // 换行
  console.log()
})