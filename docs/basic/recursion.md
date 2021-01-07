# recursion
### 递归

```js
const fs = require('fs')
const path = require('path')

const readDir = (entry) => {
  const dirInfo = fs.readdirSync(entry)
  return [].concat(...dirInfo.map(item => {
    const location = path.join(entry, item)
    return fs.statSync(location).isDirectory() ?
      readDir(location): location
    })
  )
}
```