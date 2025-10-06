const max = (...args) => {
    return args[0] + args[1]
}
console.log(max(2,6))
// ...args - оператор розширення , який збирає всі передані аргументи в масив