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