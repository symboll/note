# sort
```js
[].sort((a,b) => a- b)
```

```js
// 冒泡排序
// 选择排序
// 插入排序

// 归并排序
// 快速排序
```

#### 冒泡排序 O(n^2)
```js
function bubbling (arr) {
  let length = arr.length
  for(let i = 0; i< length; i++) {
    for(let j = 0; j< length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        // let temp = arr[j+1]
        // arr[j+1] = arr[j]
        // arr[j] = temp
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
```

#### 选择排序 O(n^2)
```js
function select (arr) {
  let length = arr.length
  let minIndex
  for(let i = 0; i< length - 1 ; i++) {
    minIndex = i
    for (let j = 0; j< length; j++) {
      if(arr[minIndex] > arr[i] ) {
        minIndex = j
      }
    }
    if(minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
```

#### 插入排序 O(n^2)
```js
function insertSort(arr) {
  const len = arr.length
  let temp  
  for(let i = 1;i < len; i++) {
    let j = i
    temp = arr[i]  
    while(j > 0 && arr[j-1] > temp) {
      arr[j] = arr[j-1]   
      j--
    }
    arr[j] = temp
  }
  return arr
}
```

#### 归并排序 O(nlogn)
```js
function mergeSort (arr) {
  const length = arr.length

  if (length <= 1) {
    return arr
  }

  const middle = Math.floor(length / 2)

  const left = mergeSort(arr.slice(0, middle))
  const right = mergeSort(arr.slice(middle))

  arr = mergeArr(left, right)
  return arr
}

function mergeArr (arr1, arr2) {
  let i = 0, j = 0;
  const res = []
  const len1 = arr1.length
  const len2 = arr2.length

  while (i < len1 && j < len2) {
    if(arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    }else {
      res.push(arr2[j])
      j++
    }
  }

  if(i< len1) {
    return res.concat(arr1.slice(i))
  }else {
    return res.concat(arr2.slice(j))
  }
}
```

#### 快速排序 O(nlogn)
```js
function quickSort(arr, left = 0, right = arr.length - 1) {
  if(arr.length > 1) {
    const lineIndex = partition(arr, left, right)
    if(left < lineIndex-1) {
      quickSort(arr, left, lineIndex-1)
    }
    if(lineIndex<right) {
      quickSort(arr, lineIndex, right)
    }
  }
  return arr
}
function partition(arr, left, right) {
  let pivotValue = arr[Math.floor(left + (right-left)/2)]
  let i = left
  let j = right
  while(i<=j) {
    while(arr[i] < pivotValue) {
      i++
    }
    while(arr[j] > pivotValue) {
      j--
    }
    if(i<=j) {
      swap(arr, i, j)
      i++
      j--
    }
  }
  return i
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
```