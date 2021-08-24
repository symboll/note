# git basic

### 创建版本库
```Shell
git clone <url>
git init
```
### 修改和提交
```Shell
git status
git diff
git add .
git commit -m 'feat: xxx'
```
### 查看提交历史
```Shell
git log
q         // 退出

git reset --hard xxxxxxxxx{commit id}
git push -f   // 强推仓库代码回滚
```

```Shell
git rebase --continue   
git rebase --skip
git rebase --abort
```