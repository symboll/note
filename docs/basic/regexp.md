# RegExp
### 正则

正则表达式都是操作`字符串`的
```js
字面量或直接量  /js/i
构造函数      new RegExp('js', 'i')
```
```js
const str = 'I love js'
const pattern = /js/

pattern.test(str)     // true     / false
pattern.exec(str)     // ['js']   / null
```
#### 模式修饰符
```js
i: ignoreCase   // 忽略大小写
g: global       // 全局匹配
m: multiline    // 多行匹配
```

#### 转义字符
```js
\n ==> \x0A
const pattern = /\x0A/
const str = 'a \n b'
pattern.test(str)    //true
pattern.exec(str)    // [ '\n' ]
`--------------------------------------`
\t ==> \u0009
const pattern = /\u0009/
const str = 'a \t b'
pattern.test(str) // true
pattern.exec(str) // [ '\t' ]
```
#### 中文
中文的范围是 `\u4e00 - \u9fa5`

#### 字符类
```js
/[js]/       // 匹配[]任意一个字符
/[^js]/      // 匹配除了j和s之外的任意字符
/[a-z]/      // 匹配小写字母a-z

/[^\n]/        === /./
/[a-zA-Z0-9]/  === /\w/
/[^a-zA-Z0-9]/ === /\W/
/[0-9]/        === /\d/
/[^0-9]/       === /\D/

/\s/     // 既能匹配制表符，又能匹配空格
/\S/     // 除了制表符和 空格之外的所有字符
/\b/     // \b表示 \w与\W 之间的位置 (单词边界)  
```
#### 重复匹配
```js
/\d\d\d/    === /\d{3}/
/\d{1,2}/      // 表示匹配1个或2个
/\d{1,}/       // 表示至少匹配一个
/^\d{3}$/      // 只匹配3个数字

`简写`
/\d{0,1}/   === /\d?/
/\d{1,}/    === /\d+/
/\d{0,}/    === /\d*/

`重点`
/\d{1, 2}/   error: 逗号后面不能有空格
/\d{,2}/     error: 不能没有下限
```
#### 贪婪匹配
```js
const str = 'aaaab'
const pattern = /a+/
pattern.exec(str)       // [ 'aaaa']

`转换成非贪婪匹配`
const pattern = /a+?/
pattern.exec(str)      // [ 'a' ]

const pattern = /a+?b/
pattern.exec(str)     // [ 'aaaab']
```

#### 选择 |
```js
const str = 'html js'
const pattern = /html|css|js/
pattern.exec(str)     //  [ 'html' ]

const str = 'ab'
const pattern = /a|ab/
pattern.exec(str)     //  ['a']

const str = 'ac'
const pattern = /(a|b)c/
pattern.exec(str)     //  ['ac', 'a', index: 0, input: 'ac', groups: undefined]
```

#### 分组 ()
```js
const str = 'abab'
const pattern = /ab+/
pattern.exec(str)    // ['ab']

const str = 'abcd'
const pattern = /(ab)c/
pattern.exec(str)     // ['abc', 'ab']
// 返回数组的第二项，是捕获性分组

`非捕获性分组`
const str = 'abcd'
const pattern = /(?:ab)c/
pattern.exec(str)   // ['abc']

const str = 'ab cd ab'
const pattern = /(ab) cd \1/
pattern.exec(str)   // ['ab cd ab', 'ab']
```

#### 位置匹配
```js
`首匹配`
const pattern = /^js/

`尾匹配`
const pattern = /js$/

`前瞻性匹配`
const pattern = /java(?=script)/
// 匹配 java 但是后面必须是 script

`负向前瞻性匹配`
const pattern = /java(?!script)/
// 匹配 java 但是后面不能是script
```

### String 对象中 与 正则相关的方法 [search, match, split, replace]
```js
`search`
const pattern = /js/g
const str = 'html js js'
str.search(pattern)        // 5
```

```js
`match`
const pattern = /js/g
const str = 'html js js'
str.match(pattern)        // [ 'js', 'js' ]
```
```js
`split`
const str = 'html,       css,         js'
const pattern = /\s*,\s*/
str.split(pattern)        // [ 'html', 'css', 'js' ]
// 不修改 str
```

```js
`replace`
const pattern = /js/g
const str = 'I love js js'
str.replace(pattern, 'html')    // 'I love html html'
// 不修改 str   
```
