# git basic

### 创建版本库
```Shell
git clone <url>
git init
```
### 提交修改
```Shell
git status
git diff
git add .
git commit -m 'feat: xxx'
git push
```
### 代码回滚 及同步远程仓库
```Shell
git log
q         // 退出
git reset --hard xxxxxxxxx{commit id}
git push -force 
```

### 合代码
```Shell
git rebase --continue   
git rebase --skip
git rebase --abort

git merge xxx
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

### 修改commit
```Shell
//  本次修改追加到上次commit上去，不产生新的commit记录
git add .
git commit --amend --no-edit

// 修改上次的commit记录，并同步远程仓库
git log                                   //记录上次的commit id
git rebase -i (commitId | HEAD~5 | --root)
i                                         // 进入编辑状态
change pick => edit
git commit --amend                       //  更新 commit 记录
git rebase --continue                    // 当出现 Successfully rebased and updated xxxx
git push --force
```