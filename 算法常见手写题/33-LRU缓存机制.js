// LRU缓存机制
// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。 写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

// 链表节点
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
// 双链表
class DoubleList {
    // 初始化头、尾节点、链表最大容量
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.size = 0;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    // 在链表头部添加节点
    addFirst(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;// !!! 后面的节点先连，如果前面的节点先连，则 next 指向有误
        this.head.next = node;
        // this.head.next = node;
        // this.head.next.prev = node;
        this.size++;
    }
    // 删除链表中存在的node节点
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }
    // 删除链表中最后一个节点，并返回该节点
    removeLast() {
        // 链表为空
        if (this.tail.prev == this.head) {
            return null;
        }
        const last = this.tail.prev;
        this.remove(last);
        return last;
    }

    getSize() {
        return this.size;
    }
}


/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.hashMap = new Map();
    this.cache = new DoubleList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.hashMap.has(key)) return -1;
    const value = this.hashMap.get(key).value;
    this.put(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const newNode = new Node(key, value);
    const hashMap = this.hashMap;
    const cache = this.cache;
    if (hashMap.has(key)) {
        cache.remove(hashMap.get(key));
    } else {
        if (this.capacity === cache.getSize()) {
            const lastNode = cache.removeLast();
            hashMap.delete(lastNode.key);
        }
    }
    cache.addFirst(newNode);
    hashMap.set(key, newNode);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */