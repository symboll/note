# combination
### 排列组合

```js
function combination (m, n) {
  let ans = 1;
  for (let x = m - n + 1, y = 1; y <= n; x++, y++) {
    ans = Math.floor(ans * x / y);
  }
  return ans;
};


// C 6, 2
combination(6,2)  // 15
```