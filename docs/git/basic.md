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

### 推分支名
```Shell
git checkout -b xxxxx
git push --set-upstream origin xxxx
```

### 删除本地分支
```Shell
git branch -d xxxx
```

### 查看远程地址
```Shell
git remote -v
```

### 可以放弃所有修改、新增、删除文件
```Shell
git checkout . && git clean -df
```

### 本次修改追加到上次commit上去
```Shell
git add .
git commit --amend --no-edit
```