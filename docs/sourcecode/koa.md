# koa

```js
class Koa {
  constructor() {
    this.middleware = []
  }
  use (fn) {
    typeof fn === 'function' && this.middleware.push(fn)
    return this
  }
  listen () {
    const fn = compose(this.middleware)
    fn()
  }
}

function compose (middleware) {
  if(!Array.isArray(middleware)) { throw new TypeError('xx') }
  for(let key of middleware) {
    if(typeof key !== 'function') {
      throw new TypeError('xx')
    }
  }

  return function(ctx, next) {
    let index = -1
    return dispatch(0)
    function dispatch(i) {
      if(i <= index ) { return Promise.reject(new Error('xxx')) }
      index = i
  
      let fn = middleware[i]
      if(i === middleware.length) fn = next
  
      if (!fn) return Promise.resolve()
  
      try {
        return Promise.resolve(fn(ctx,dispatch.bind(null, i+1)))
      }catch (err) {
        return Promise.reject(err)
      }
    }
  }
}

// test
const koa = new Koa()
koa.use(async function(ctx, next) {
  console.log(123)
  next()
  console.log(456)
})

koa.use(async function(ctx, next) {
  console.log('abc')
  next()
  console.log('def')
})

koa.listen()
```