# permutation
### 排列
```js
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
const permute = function(nums) {
  let res = []
  let map = new Map()
  function dfs (path) {
    if(path.length === nums.length) {
      res.push(path.slice())
      return
    }
    for(const num of nums) {
      if(map.has(num)) continue;
      path.push(num)
      map.set(num, true)
      dfs(path)
      path.pop()
      map.set(num,false)
    }
  }
  dfs([])
  return res
};
```
```js
// 输入:nums = [1,1,2]
// 输出:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
var permuteUnique = function(nums) {
  const res = [];
  const hash = Array.from({ length: nums.length },()=> false)

  nums.sort((a,b) => a - b)
  function dfs(path) {
    if (path.length == nums.length) {
      res.push(path.slice());
      return;
    }
    // for (const num of nums) {
    //   if (used[num]) continue;
    //   path.push(num);
    //   used[num] = true;
    //   dfs(path);
    //   path.pop();
    //   used[num] = false;
    // }
    for(let i=0; i< nums.length; i++){
      if( hash[i] || (i > 0 && nums[i] === nums[i-1] && !hash[i-1] ) ){ continue }
      path.push(nums[i])
      hash[i] = true
      dfs(path)
      path.pop()
      hash[i] = false
    }
  }

  dfs([]);
  return res;
};

```

```js
// 输入:candidates = [2,3,5], target = 8,
// 输出:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]
function combinationSum(candidates, target){
  let res = []
  function dfs (start, temp, sum) {
    if(sum >= target) {
      if(sum === target) {
        res.push(temp.slice())
      }
      return
    }
    for(let i=start; i< candidates.length; i++) {
      temp.push(candidates[i])
      dfs(i, temp, sum + candidates[i])
      temp.pop()
    }
  }

  dfs(0,[], 0)    // start, temp, sum
  return res
}
```