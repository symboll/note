# Func
### 函数

#### utils
```js
const basicType = ['string', 'number', 'boolean','undefined','null','symbol', 'bigint']
const falseTypeArr = ['undefined','null']
const dataType = any => Object.prototype.toString.call(any).slice(8,-1).toLowerCase()
```
#### call
```js
Function.prototype._call = function (ctx, ...params) {
  if(typeof this !== 'function' ){
    throw new TypeError('xxx')
  }
  ctx = basicType.includes(dataType(ctx)) ?
    (falseTypeArr.includes(dataType(ctx)) ? window : {})
    :ctx

  ctx.fn = this
  let res = ctx.fn(...params)
  Reflect.deleteProperty(ctx, 'fn')
  return res
}
```

#### apply
```js
Function.prototype._apply = function (ctx, params) {
  if(typeof this !== 'function' ){
    throw new TypeError('xxx')
  }
  ctx = basicType.includes(dataType(ctx)) ?
    (falseTypeArr.includes(dataType(ctx)) ? window : {})
    :ctx

  ctx.fn = this
  let res = ctx.fn(...params)
  Reflect.deleteProperty(ctx, 'fn')
  return res
}
```
#### bind
```js
Function.prototype._bind = function (ctx, ...params) {
  if(typeof this !== 'function' ){
    throw new TypeError('xxx')
  }
  let _this = this
  function fn () {
    return _this.apply(ctx, params)
  }
  if(this.prototype) {
    fn.prototype = Object.create(this.prototype)
  }
  return fn
}
```