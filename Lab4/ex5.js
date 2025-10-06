const sum = (...args) => {
   total = args.reduce((acc, num) => acc + num, 0)
   return total

}
e = sum(1,2,3,4,5)
console.log(e)
