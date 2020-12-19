function curry () {
  let allArgs = [];
  return function next(){
    let args = [...arguments]
    if(args.length > 0){
      allArgs = allArgs.concat(args);
      return next;
    }else{
      let copyArgs = allArgs
      allArgs = []
      return fn.apply(null, copyArgs);
    }
  } 
}

function fn () {
  let arg = Array.from(arguments)
  return arg.reduce((a, b) => a+b , 0)
}

let add = curry(fn)

console.log(add(1,2,3)(4)(5,6,7)())