// 二叉树
// 简单 ⭐️
// 对称的二叉树
// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

// 解题思路：利用递归，关注递归函数的定义

// 若左右子树有一方为空，则不对称
// 若左右子树都为空，则对称。比如根节点
// 若左右子树都不为空，则判断对应的值。若值相等，则递归比较【左子树的左孩子和右子树的右孩子；左子树的右孩子和右子树的左孩子都要对称】。若不相等，则不对称。
var isSymmetric = function (root) {
    if (!root) return true;
    return helper(root.left, root.right);
};

var helper = function (leftSubTree, rightSubTree) {
    if ((leftSubTree && !rightSubTree) || (!leftSubTree && rightSubTree)) return false;
    if (!leftSubTree && !rightSubTree) return true;
    if (leftSubTree.val === rightSubTree.val) {
        const isSymmetric1 = helper(leftSubTree.left, rightSubTree.right);
        const isSymmetric2 = helper(leftSubTree.right, rightSubTree.left);
        return isSymmetric1 && isSymmetric2;
    }else{
        return false;
    }
}
// 二叉树的镜像
// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 解题思路：利用层次遍历

var mirrorTree = function (root) {
    if (!root || (!root.left && !root.right)) return root;
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const parent = queue.shift();
        const tempNode = parent.left;
        parent.left = parent.right;
        parent.right = tempNode;
        if (parent.left) {
            queue.push(parent.left);
        }
        if (parent.right) {
            queue.push(parent.right);
        }
    }
    return root;
};
// I. 二叉树的深度
// 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

// 方案1 ：利用层次遍历，双重循环。申请一个中转载体存储一层的节点。

var maxDepth = function (root) {
    if (!root) return 0;
    let level = 0;
    let queue = [];// 既是上一层节点的载体也是下一层节点的载体
    queue.push(root);
    while (queue.length) {
        let levelNode = [];// 中转载体，装一层的节点
        queue.forEach((node) => {
            node.left ? levelNode.push(node.left) : '';
            node.right ? levelNode.push(node.right) : '';
        })
        queue = levelNode;
        level++;
    }
    return level;
};
// 方案 2 ：递归，思路：左右子树深度的最大值 + 1；根节点的深度为 1

// 【 优选 】
var maxDepth = function(root) {
    if(!root) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth,rightDepth) + 1;
};
// II. 平衡二叉树
// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

// 满足条件

// 它的左子树和右子树都是一颗平衡二叉树
// 它的左子树和右子树的深度之差(平衡因子)的绝对值不超过1
var isBalanced = function (root) {
    return isBalancedHelper(root) != -1;
};

var isBalancedHelper = function (root) {
    if (!root) return 0;
    const left = isBalancedHelper(root.left);
    if (left === -1) return -1;
    const right = isBalancedHelper(root.right);
    if (right === -1) return -1;
    return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
}
// 二叉搜索树的第 K 个节点
// 给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。

// 二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。

//递归实现
function KthNode(pRoot, k) {
  const arr = [];
  inorderTraversal(pRoot, arr);
  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  }
  return null;
}

function inorderTraversal(node, arr) {
  if (node) {
    inorderTraversal(node.left, arr);
    arr.push(node);
    inorderTraversal(node.right, arr);
  }
}
//非递归实现
function KthNode(pRoot, k) {
  const arr = [];
  const stack = [];
  let current = pRoot;
  while (stack.length > 0 || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    arr.push(current);
    current = current.right;
  }
  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  }
  return null;
}
// 中等 ⭐️⭐️⭐️
// 二叉树的遍历
// 前序遍历
// 根左右

// 递归版
var preorderTraversal = function (root, array = []) {
  if (root) {
    array.push(root.val);
    preorderTraversal(root.left, array);
    preorderTraversal(root.right, array);
  }
  return array;
};
// 思路：取根节点为目标节点，开始遍历

// 访问目标节点
// 左孩子入栈 -> 直至左孩子为空的节点
// 节点出栈，以右孩子为目标节点，再依次执行1、2、3
// 迭代版
const preOrderTraversal=(root) => {
    let [nodeList, stack] = [[],[]];
    let p=root;
    while(p || stack.length>0){
         while(p){//圧栈，直至左节点为空
           stack.push(p);
           nodeList.push(p.val);
           p=p.left;
         }
         p=stack.pop();
         p=p.right;
    }
    return nodeList;
}
中序遍历
左根右

// 递归版
var inorderTraversal = function (root, array = []) {
  if (root) {
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
  }
  return array;
};
// 思路：取根节点为目标节点，开始遍历

// 左孩子入栈 -> 直至左孩子为空的节点
// 节点出栈 -> 访问该节点
// 以右孩子为目标节点，再依次执行1、2、3
// 迭代版
const inOrderTraversal=(root) => {
    let [nodeList, stack] = [[],[]];
    let p=root;
    while(p || stack.length>0){
     while(p){//圧栈，直至左节点为空
       stack.push(p);
       p=p.left;
     }
     p=stack.pop();
     nodeList.push(p.val);
     p=p.right;
    }
    return nodeList;
}
后序遍历
左右根

// 递归版
var postorderTraversal = function (root, array = []) {
  if (root) {
    postorderTraversal(root.left, array);
    postorderTraversal(root.right, array);
    array.push(root.val);
  }
  return array;
};
// 迭代版
const postOrderTraversal=(root) => {
    let [nodeList, stack] = [[],[]];
    let p=root;
    stack.push(p);
    stack.push(p);
    while(stack.length!==0){//第一次弹出，将node的孩子压入栈中，第二次弹出，访问node
     node=stack.pop();
     if(stack.length!==0 && node===stack[stack.length-1]){
       if(node.right){
         stack.push(node.right);
         stack.push(node.right);
       }
       if(node.left){
         stack.push(node.left);
         stack.push(node.left);
       }
     }else{
       nodeList.push(node.val);
     }
    }
    return nodeList;
}
深度遍历
const deepTraversal=(node) => {
    let [nodeList, stack] = [[],[]];
    let parent, children;
    if (node) {
        stack.push(node);
        while (stack.length !== 0) {
            parent = stack.pop();
            nodeList.push(parent);
            children = parent.children;
           for (let i = children.length - 1; i >= 0; i--) { //先压入右孩子再压入左孩子
                stack.push(children[i]);
            }
        }
    }
    return nodeList;
}
广度遍历
const wideTraversal=(node)=>{
    let [nodeList,queue]=[[],[]];
    let parent,children;
    if(node){
        queue.push(node);
        while(queue.length!==0){
            parent=queue.shift();
            nodeList.push(parent);
            children=parent.children;
            for(let i=0;i<children.length;i++){
                queue.push(children[i]);
            }
        }
    }
    return nodeList;
}
// 重建二叉树
// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 思路：构造一个递归函数用来构造树，接收三个参数，树的根节点在前序遍历中的下标和其中序遍历的左右边界

// 根据前序遍历找到树的根节点，并新建一个节点
// 根据前序遍历中找到的根节点，查找其在中序遍历中的下标。下标的左右分别是左右子树
var buildTree = function (preorder, inorder) {
    const inorderMap = new Map();
    inorder.forEach((item, index) => {
        inorderMap.set(item, index);
    })
    function recursiveBuildTree(preRoot, inLeftBorder, inRightBorder) {
        if (inLeftBorder > inRightBorder) return null;
        const preRootVal = preorder[preRoot];
        const root = new TreeNode(preRootVal);
        const rootIndexInInorder = inorderMap.get(preRootVal);
        root.left = recursiveBuildTree(preRoot + 1, inLeftBorder, rootIndexInInorder - 1);
        root.right = recursiveBuildTree(preRoot + 1 + rootIndexInInorder - inLeftBorder, rootIndexInInorder + 1, inRightBorder);
        return root;
    }
    return recursiveBuildTree(0, 0, inorder.length - 1);
};
// I. 从上到下打印二叉树
// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
    const queue = [],
        nodeList = [];
    queue.push(root);
    while (queue.length) {
        const parent = queue.shift();
        parent ? nodeList.push(parent.val) : '';
        parent && parent.left ? queue.push(parent.left) : '';
        parent && parent.right ? queue.push(parent.right) : '';
    }
    return nodeList;
};
// III. 从上到下打印二叉树 III
// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

// 解决思路

// 判断奇偶性，决定是否反转
// 动态为下一层节点申请空间
// 利用一个辅助数组保存下一层节点，再迭代重置 stack
// 执行耗时 100ms
var levelOrder = function (root) {
    if (!root) return []
    let stack = [root],
        stackHelper = [],// 保存下一层的节点并克隆给 stack 
        level = 0,
        result = [[]],
        isEven = (level + 1) % 2 === 0,
        position = 0; // 某一层节点的下标
    while (stack.length > 0) {
        let node = stack[position++]
        result[level].push(node.val)
        if (node.left) stackHelper.push(node.left)
        if (node.right) stackHelper.push(node.right)
        if (position === stack.length) { // 准备遍历下一层，重置数据
            stack = stackHelper.concat([])
            stackHelper = []
            result[level] = isEven ? result[level].reverse() : result[level]
            position = 0
            level++
            if (stack.length > 0) result[level] = [] // 如果下一层有节点，再为下一层节点申请空间
            isEven = (level + 1) % 2 === 0
        }
    }
    return result
};
// 执行耗时 60ms 
var levelOrder = function (root) {
    const result = [];
    const oddStack = [];
    const evenStack = [];
    let temp = [];
    if (root) {
        oddStack.push(root);
        while (oddStack.length > 0 || evenStack.length > 0) {
            while (oddStack.length > 0) {
                const current = oddStack.pop();
                temp.push(current.val);
                if (current.left) {
                    evenStack.push(current.left);
                }
                if (current.right) {
                    evenStack.push(current.right);
                }
            }
            if (temp.length > 0) {
                result.push(temp);
                temp = [];
            }
            while (evenStack.length > 0) {
                const current = evenStack.pop();
                temp.push(current.val);
                if (current.right) {
                    oddStack.push(current.right);
                }
                if (current.left) {
                    oddStack.push(current.left);
                }
            }
            if (temp.length > 0) {
                result.push(temp);
                temp = [];
            }
        }
    }
    return result;
};
// 二叉树中和为某一值的路径
// 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

// 思路：构造一个递归函数用来走完所有路径，接收两个参数，一个是当前节点，一个是剩余值

// 当剩余值为0，且当前节点是叶子节点时，存储当前路径
// 在走下一条路径的时候，记得 pop 掉上一条路径的最后一个节点
var pathSum = function (root, sum) {
    const pathRes = [], pathNode = [];
    function recursivePathSumHelper(node, tar) {
        if (node) {
            tar = tar - node.val;
            pathNode.push(node.val);
            if (tar === 0 && !node.left && !node.right) {// 一直到叶子节点形成的路径
                let tempPathNode = JSON.parse(JSON.stringify(pathNode));
                pathRes.push(tempPathNode);
            }
            recursivePathSumHelper(node.left, tar);
            recursivePathSumHelper(node.right, tar);
            pathNode.pop();
        }
    }
    recursivePathSumHelper(root,sum);
    return pathRes;
};
// 困难 ⭐️⭐️⭐️⭐️⭐️
// 二叉树的序列化与反序列化
// 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

// 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

// 思路：利用层次遍历 + JSON.Stringfy + JSON.parse

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return `[]`;
    }
    const nodeList = [],
        queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        const parent = queue.shift();
        const parentVal = parent ? parent.val : null;
        nodeList.push(parentVal);
        if (parent) {
            queue.push(parent.left);
            queue.push(parent.right);
        }
    }
    return JSON.stringify(nodeList);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const nodeList = JSON.parse(data);
    if (!nodeList.length) return null;
    const root = new TreeNode(nodeList.shift());
    const queue = [];
    queue.push(root);

    while (queue.length) {
        const node = queue.shift();
        const leftVal = nodeList.shift();
        if (leftVal !== null) {
            node.left = new TreeNode(leftVal);
            queue.push(node.left);
        }
        const rightVal = nodeList.shift();
        if (rightVal !== null) {
            node.right = new TreeNode(rightVal);
            queue.push(node.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */