const dataType = (any) => {
  const toString = Object.prototype.toString
  return toString.call(any).slice(8, -1)
}


const map = new WeakMap()
const math = Math

const fun = ()=> {}
console.log(dataType(fun))