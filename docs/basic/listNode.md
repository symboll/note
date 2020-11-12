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
// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3)     
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next
// 把node1的 next 指针指向 node3
node1.next = node3
```

#### 删除
```js
node1.next = node3.next 
```