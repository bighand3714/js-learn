// 链表
// 难度 — 简单 ⭐️
// 合并两个有序链表
// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2;
    else if (l2 === null) return l1;
    else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
// 利用归并排序的思想 【 优选 】
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let p = dummyHead = { next: null };
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = l1;
            p = p.next;
            l1 = l1.next;
        } else {
            p.next = l2;
            p = p.next;
            l2 = l2.next;
        }
    }
    p.next = l1 ? l1 : l2;
    return dummyHead.next;
};
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let dummyHead = l3 = { next: null };
    while (l1 && l2) {
        if (l1.val < l2.val) {
            l3.next = { val: l1.val, next: null };
            l1 = l1.next;
        } else {
            l3.next = { val: l2.val, next: null };
            l2 = l2.next;
        }
        l3 = l3.next;
    }
    if (l1) {
        l3.next = l1;
    }
    if (l2) {
        l3.next = l2;
    }
    return dummyHead.next;
};
// 删除排序链表中的重复元素
// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 思路：递归/快慢指针/set/单指针法

var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;
    head.next = deleteDuplicates(head.next);
    if (head.val === head.next.val) head.next = head.next.next;
    return head;
};
// 直接法 【 优选 】
var deleteDuplicates = function (head) {
    if (head === null) return head;
    let cur = head;
    while (cur && cur.next ) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head;
};
// case: [1,1,2,3,3]
var deleteDuplicates = function (head) {
    if (head === null) return head;
    let slow = head;
    let fast = slow.next;
    while (fast) {
        if (slow.val !== fast.val) {
            slow.next = fast
            slow = fast
        } 
        fast = fast.next
    }
    slow.next = null
    return head;
};
var deleteDuplicates = function (head) {
    const helpSet = new Set();
    let p = dummyHead = { next: null };
    while (head) {
        helpSet.add(head.val);
        head = head.next;
    }
    for (let item of helpSet.values()) {
        p.next = { val: item, next: null };
        p = p.next;
    }
    return dummyHead.next;
};
// 删除链表中的节点
// 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

var deleteNode = function(node) {
  Object.assign(node,node.next);
};
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
// 反转链表
// 题目：反转一个单链表。

// 递归主要看函数的定义，不要跳进递归执行
var reverseList = function(head) {
    if(!head ||!head.next) return head;
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
// 【 优选 】需要三个指针，一个指向前一个节点，一个指向当前节点，一个指向下一个节点
var reverseList = function(head) {
    let pre = null;
    let cur = head;
    let temp = null;
    while(cur!==null){
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
};
// 回文链表
// 题目：请判断一个链表是否为回文链表。

// 方案 1 思路

// 利用快慢指针，反转前半部分链表 【注意考虑链表节点数的奇偶性】
// 反转后的前半部分链表和后半部分进行值比对
// 【 优选 】
var isPalindrome = function (head) {
    if (!head || !head.next) return true;
    let slow = head, fast = head, cur = null, reversed = null;
    while (fast && fast.next) {
        cur = slow;
        slow = slow.next;
        fast = fast.next.next;
        cur.next = reversed;
        reversed = cur;
    }
    if(fast) slow = slow.next;// 奇数情况
    while(reversed && slow){
        if(reversed.val === slow.val){
            reversed = reversed.next;
            slow = slow.next;
        }else{
            return false;
        }
    }
    return true;
};
// 方案 2 思路

// 遍历链表，新建一个反转后的链表
// 新建链表和原链表进行值比对
var isPalindrome = function (head) {
    if (!head || !head.next) return true;
    let p = head.next, newHead = { val: head.val, next: null };
    while (p) {
        let newNode = { val: 0, next: null };
        newNode.val = p.val;
        newNode.next = newHead;
        newHead = newNode;
        p = p.next;
    }
    let q = head, r = newHead;
    while (q && r) {
        if (q.val === r.val) {
            q = q.next;
            r = r.next;
        }else{
            return false;
        }
    }
    return true;
};
// 环形链表
// 给定一个链表，判断链表中是否有环。

// 【 优选 】
var hasCycle = function (head) {
    if (head) {
        let fast = low = head;
        while (fast && fast.next) {
            low = low.next;
            fast = fast.next.next;
            if (fast === low) {
                return true;
            }
        }
    }
    return false;
};
var hasCycle = (head) => {
    let set = new Set();
    let p = head;
    while(p) {
        // 同一个节点再次碰到，表示有环
        if(set.has(p)) return true;
        set.add(p);
        p = p.next;
    }
    return false;
}
var hasCycle = function(head) {
    try{
        JSON.stringify(head);
        return false
    }catch(err){
        return true
    }
};
// 从尾到头打印链表
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

var reversePrint = function (head) {
    let reverseArr = [];
    while(head){
        reverseArr.unshift(head.val);
        head = head.next;
    }
    return reverseArr;
};
var reversePrint = function (head) {
    let listLenth = 0, reverseArr = [], newHead = head;
    while (newHead) {
        ++listLenth;
        newHead = newHead.next;
    }
    for (let i = listLenth - 1; i >= 0; i--) {
        reverseArr[i] = head.val;
        head = head.next;
    }
    return reverseArr;
};
// 链表中倒数第k个节点
// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

// 利用快慢指针
var getKthFromEnd = function (head, k) {
    if (!head || !head.next) return head;
    let slow = head, fast = head;
    while (k) {
        fast = fast.next;
        k--;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};

// 难度 — 中等 ⭐️⭐️⭐️
// 设计循环队列
// 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.capacity = k + 1;
    this.headIndex = 0; // 头指针负责出队
    this.tailIndex = 0;// 尾指针负责入队，指向最后一个元素的下一个位置
    this.circleQueue = [];
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (!this.isFull()) { 
        this.circleQueue[this.tailIndex] = value;
        this.tailIndex = (this.tailIndex + 1) % this.capacity;
        return true;
    } else {
        return false
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (!this.isEmpty()) {
        this.headIndex = (this.headIndex + 1) % this.capacity;
        return true;
    } else {
        return false;
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this.isEmpty() ? -1 : this.circleQueue[this.headIndex];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return this.isEmpty() ? -1 : this.circleQueue[(this.tailIndex - 1 + this.capacity) % this.capacity];// + this.capacity 兼容 tailIndex 又走到下标 0， % this.capacity 兼容 tailIndex 大于 0 
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.headIndex === this.tailIndex ? true : false;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return (this.tailIndex + 1) % this.capacity === this.headIndex;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// 环形链表 II
// 给定一个链表，返回链表开始入环的第一个节点。如果链表无环，则返回 null。说明：不允许修改给定的链表。

// 方案1 解题思路：三个重要的点 — 链表起始点(A)，环起始点(B)，相遇点(C)，设 x = AB,y = BC,z = CB 【 快慢指针 + 数学公式 】

// slow 走过的距离 = AB + BC = x + y
// fast 走过的距离 = AB + BC + CB + BC = x + y + z + y = x + 2y + z
// fast 走过的距离是 slow 的两倍 ，2(x + y) = x + z + 2y 。故 x = z
// 将 fast 放到 head 位置，和 slow 以同样的速度移动，相遇时候的节点即是入环的第一个节点
// 【 优选 】
var detectCycle = function (head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow){
            fast = head;
            while(fast!==slow){
                slow = slow.next;
                fast = fast.next;
            }
            return fast;
        }
    }
    return null;
};
var detectCycle = function (head) {
    let detectSet = new Set();
    while (head) {
        if (detectSet.has(head)) return head;
        detectSet.add(head);
        head = head.next;
    }
    return null;
};
// 反转链表 II
// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。说明: 1 ≤ m ≤ n ≤ 链表长度。

// 解题思路：反转链表升级

var reverseN = function (head, n) {
    var tailNode = null;
    function innerReverseN(head, n) {
        if (n === 1) {
            tailNode = head.next;
            return head;
        }
        let last = innerReverseN(head.next, n - 1);
        head.next.next = head;
        head.next = tailNode;
        return last;
    }
    return innerReverseN(head, n);
};
var reverseBetween = function (head, m, n) {
    if (m === 1) {
        let reveseHead = reverseN(head, n);
        return reveseHead;
    }
    let last = reverseBetween(head.next, m - 1, n - 1);
    head.next = last;
    return head;
};
// 删除排序链表中的重复元素 II
// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

// 解题思路：哑结点 + 快慢指针

// 创建一个哑结点，避免头结点重复
// fast 指针用来跳过相同的节点，最后停留在所有相同节点的最后一个
// 如果 slow.next 指向 fast ，说明 fast 没移动过，slow、fast 都前进一步
// 如果 slow.next 不指向 fast ，说明 fast 移动过，slow.next === fast.next
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let slow = dummyHead;
    let fast = dummyHead.next;
    while(fast){
        while(fast.next && fast.val === fast.next.val) fast = fast.next;
        if(slow.next !== fast){
            slow.next = fast.next;
        }else{
            slow = slow.next;
        }
        fast = fast.next;
    }
    return dummyHead.next;
}
// 删除链表的倒数第N个节点
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 解决思路：增加一个哑结点，slow 走到的节点就刚好是要删除节点的前一个

var removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let slow = dummyHead, fast = head;
    while (n && fast) {
        fast = fast.next;
        n--;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummyHead.next;
};
// 两数相加 II
// 给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。

// 解题思路：利用两个栈

// 【 优选 】
var addTwoNumbers = function (l1, l2) {
    const stack1 = [];
    const stack2 = [];

    while (l1) {
        stack1.push(l1);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2);
        l2 = l2.next;
    }

    let carry = 0;
    let dummyHead = { next: null }
    while (stack1.length > 0 || stack2.length > 0) {
        let p1 = stack1.pop();
        let p2 = stack2.pop();

        let x = p1 ? p1.val : 0;
        let y = p2 ? p2.val : 0;

        let sum = x + y + carry;
        let a = sum % 10;//个位
        let b = Math.floor(sum / 10);

        dummyHead.next = { val: a, next: dummyHead.next };
        carry = b;
    }
    if (carry) {
        dummyHead.next = { val: carry, next: dummyHead.next }
    }
    return dummyHead.next;
};
var createAddNode = function (helperParams, addendArr, augendArr) {
    let res = augendArr ?
        addendArr.pop() + augendArr.pop() + helperParams.carry
        : addendArr.pop() + helperParams.carry;
    let sum = res % 10;
    let newNode = new ListNode(sum);
    helperParams.carry = Math.floor(res / 10);
    newNode.next = helperParams.head;
    helperParams.head = newNode;
    return helperParams
}
var addTwoNumbers = function (l1, l2) {
    let arr1 = [],
        arr2 = [],
        p = l1,
        q = l2,
        shorterLen = 0;
    while (p) {
        arr1.push(p.val);
        p = p.next;
    }
    while (q) {
        arr2.push(q.val);
        q = q.next
    }
    shorterLen = arr1.length <= arr2.length ? arr1.length : arr2.length;
    let helperParams = {
        head: null,
        carry: 0
    }
    for (let i = 0; i < shorterLen; i++) {
        createAddNode(helperParams, arr1, arr2);
    }
    while (arr1.length) {
        createAddNode(helperParams, arr1);
    }
    while (arr2.length) {
        createAddNode(helperParams, arr2);
    }
    if (helperParams.carry) {
        let newNode = new ListNode(helperParams.carry);
        newNode.next = helperParams.head;
        helperParams.head = newNode;
    }
    return helperParams.head;
};