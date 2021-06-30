# git 常用指令

### 创建版本库
```js
git clone <url>
git init
```
### 修改和提交
```js
git status
git diff
git add .
git commit -m 'feat: xxx'
```
### 查看提交历史
```js
git log
git reset --hard xxxxxxxxx{commit id}
// 强推仓库代码回滚
git push -f
```

```js
git rebase --continue   
git rebase --skip
git rebase --abort
```