function seq(...args) {
  
  let funcs = [...args]
    return function chain(arg) {
    if (typeof arg === 'function') {
      funcs.push(arg)
      return chain
    } else {
      return funcs.reduce((acc, fn) => fn(acc), arg)
    }
  }

  
}
console.log(seq(x => x + 7, x => x * 2)
(x => x * 2)(5))