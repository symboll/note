# fs

### 修改文件名
```js
const fs = require("fs")
const path = require("path")

fs.readdirSync(path.resolve(__dirname)).forEach(file => {
  if(file === 'index.js') return
  let fileNameArr = file.split('.')
  let type = fileNameArr[fileNameArr.length -1 ]
  const oldName = fileNameArr.slice(0, fileNameArr.length-1).join('.')

  const newName = oldName.replace('xxx', 'abc')
  fs.renameSync(
    path.resolve(__dirname)+'/'+ file, 
    path.resolve(__dirname)+ '/' + newName + '.' + type
  )
})
```