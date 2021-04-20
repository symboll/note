# TreeNode
### 二叉树
```js
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
```
#### 创建
```js
const node  = new TreeNode(1)

node.left = new TreeNode(2)
node.right = new TreeNode(3)
```
#### 遍历
```js
function preorder(root) {
    if(!root) {
        return 
    }
    console.log('当前遍历的结点值是：', root.val)  
    preorder(root.left)  
    preorder(root.right)
}
```
