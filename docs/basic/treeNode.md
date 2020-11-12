# TreeNode
### 二叉树
```js
// 二叉树结点的构造函数
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
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
    // 递归边界，root 为空
    if(!root) {
        return 
    }
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)  
    // 递归遍历左子树 
    preorder(root.left)  
    // 递归遍历右子树  
    preorder(root.right)
}
```
