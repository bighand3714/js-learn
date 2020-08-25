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

