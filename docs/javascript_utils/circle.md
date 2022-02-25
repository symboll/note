# circle

```js
// 滴滴面试题
100个小孩 1,2,3报数。报到3的出列。求最后剩下的小孩编号。
```
```js
// 面向对象编程
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