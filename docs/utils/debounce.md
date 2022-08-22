# debounce & throttle

```js
// debounce 理解为最后一个人说了算
function debounce(fn, delay) {
  let timer = null
  return function() {
    const arg = Array.from(arguments)
    const ctx = this

    if (timer) {
      clearTimerout(timer)
    } else {
      timer = setTimeout(() => {
        fn.apply(ctx, arg)
      }, delay)
    }
  }
}

// throttle 理解为 第一个人说了算
function throttle(fn, interval) {
  let last = 0

  return function() {
    const ctx = this
    const arg = Array.from(arguments)
    let now = +new Date()
    if (now - last > interval) {
      last = now
      fn.apply(ctx, arg)
    }
  }
}
```
