# ListNode

### 链表
```js
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/// 创建
const node = new ListNode(1)  
node.next = new ListNode(2)

/// 添加
const node3 = new ListNode(3)     
node3.next = node1.next
node1.next = node3

/// 删除
node1.next = node3.next 
```

### 链表的合并
```js
// 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

function merge (listNode1, listNode2) {
  let head = new ListNode()
  let point = head
  while(listNode1 && listNode2) {
    if(listNode1.val >= listNode2.val) {
      point.next = listNode2
      listNode2 = listNode2.next
    }else {
      point.next = listNode1
      listNode1 = listNode1.next
    }
    point = point.next
  }

  point.next = listNode1 == null ? listNode1: listNode2

  return head.next
}

```

### 链表删除重复项
```js
// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
// 输入: 1->1->2   输出: 1->2
// 输入: 1->1->2->3->3  输出: 1->2->3

function unique (listNode) {
  let point = listNode
  while(point != null && point.next != null) {
    if(point.val == point.next.val) {
      point.next = point.next.next
    }else {
      point = point.next
    }
  }
  return listNode
}

// 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
// 输入: 1->2->3->3->4->4->5   输出: 1->2->5
// 输入: 1->1->1->2->3  输出: 2->3

function unique (listNode) {
  if(!listNode || !listNode.next) {
    return listNode
  }
  let dummy = new ListNode()
  dummy.next = listNode
  let point = dummy
  while(point.next && point.next.next) {
    if(point.next.val === point.next.next.val) {
      let val = point.next.val
      while(point.next && point.next.val===val) {
        point.next = point.next.next
      }
    }else {
      // console.log('p->',point)
      point = point.next
    }
  }
  return dummy.next
}
```

### 删除链表的倒数第 N 个结点
```js
// 输入: 1->2->3->4->5, 和 n = 2.    输出: 1->2->3->5.

function removeNthFromEnd(listNode, num) {
  let dummy = new ListNode()
  dummy.next = listNode
  let fast = dummy
  let show = dummy
  while (n! = 0) {
    fast = fast.next
    n--
  }
  while (fast.next) {
    fast = fast.next
    show = show.next
  }

  show.next = show.next.next
  return dummy.next
}
```

### 链表反转
```js
function reverse (listNode) {
  let pre = null
  let point = listNode
  while (point !== null) {
    let next = point.next
    point.next = pre
    pre = point
    point = next
  }
  return pre
}

/// 局部反转
function reverseBetween (listNode, n, m) { 

  let dummy = new ListNode()
  dummy.next  = listNode

  let pre, current, leftHead
  let p = dummy

  for (let i = 0; i< n-1; i++) {
    p = p.next
  }
  leftHead = p
  let start = leftHead.next
  pre = start
  current = pre.next

  console.log('current', current)

  for(let i = 0; i< m-n; i++) {
    console.log('i',i)
    let next = current.next
    current.next = pre
    pre = current
    current = next
  }

  leftHead.next = pre
  start.next = current

  return dummy.next
}

```