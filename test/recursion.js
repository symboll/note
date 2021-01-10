function recursion(arr) {
  return arr.reduce(
    (result, item) =>
      result.concat(
        Array.isArray(item.children)
          ? item.children.unshift({ name: item.name }) && recursion(item.children)
          : item.name
      ),
    []
  )
}

const arr = [
  {
    name: "a",
  },
  {
    name: "b",
    children: [
      {
        name: "e",
        children: [
          {
            name: "g",
          },
        ],
      },
      {
        name: "f",
      },
    ],
  },
  {
    name: "c",
  },
  {
    name: "d",
  },
]

console.log(recursion(arr))



// const arr = [1,2,3]
// let a = arr.concat(4,5,6)


// console.log(a)