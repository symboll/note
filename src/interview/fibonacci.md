# Fibonacci

```js
// 尾调用
function Fibonacci (n, pre=1, current=1) {
  if (n <= 2) {
    return current
  }
  return Fibonacci(n-1, current, current+ pre)
}
```

```js
// Generator
function Fibonacci(m) {
  let arr = []
  function* gen() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }

  for (let n of gen()) {
    if (n > m) break;
    arr.push(n)
  }
  return arr
}
```