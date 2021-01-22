# ListNode

### 链表
```js
function ListNode(val) {
  this.val = val;
  this.next = null;
}
```

#### 创建
```js
const node = new ListNode(1)  
node.next = new ListNode(2)
```

#### 添加
```js
const node3 = new ListNode(3)     
node3.next = node1.next
node1.next = node3
```

#### 删除
```js
node1.next = node3.next 
```

### 面试题
```js
function Link (val) {
  this.value = val
  this.next = null
}
function find (total, num) {
  let head = new Link(0)
  let p = head
  for(let k=1; k<=total; K++) {
    p.next = new Link(k)
    p = p.next
  }
  p.next = head.next
  p = p.next

  let i = 1
  while(p.next !== p) {
    if(i%num === num-1) {
      p.next = p.next.next
    }else {
      p = p.next
    }
    i++
  }
  return p
}
```

```js
// 面向过程解题
function find (arr, num) {
  while(arr.length > num) {
    let head = []
    while(arr.length % num !== 0) {
      const item = arr.pop()
      head.unshift(item)
    }
    arr = head.concat(...arr.filter((_, index)=> (index + 1)% num !==0))
  }
  let i = num
  while(i !==1) {
    let k = arr.slice()
    while(k.length < num) {
      k = k.concat(...k)
    }
    const item = k[num-1]
    const index = arr.findIndex(i => i === item)
    arr.splice(index,1)
    i--
  }
  return arr
}
```