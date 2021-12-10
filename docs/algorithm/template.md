# template

```js
// 阿里面试题
let template = '你好，我们公司是{{ company }}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}等。';
let obj = {
  group: {
    name: '天猫',
    jobs: ['前端']
  },
  company: '阿里'
}


function render(templete, obj){
  const pattern = /{{\s*((\w+)?\.?(\[\d+\])?(\w+)?)+\s*}}/g
  return template.replaceAll(pattern, (match) => {
    const matchArr = match.replace('{{', '').replace('}}', '').trim().split('.')
    const value = matchArr.reduce((obj,current) => {
      if(current.indexOf('[')> -1) {
        const arrKey = current.split('[')
        const key = arrKey[0]
        const index = arrKey[1].split(']')[0]
        return obj[key][index]
      }
      else if(obj[current]) { return obj[current] }
    }, obj)
    return value
  })  
}
```