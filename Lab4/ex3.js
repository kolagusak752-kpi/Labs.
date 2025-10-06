const sum = (...args) => {
    let total = 0
    let i = 0
    while (i < args.length) {
        total += args[i]
        i++
    }
    return total
}
c = sum(1,2,3,4,5)
console.log(c)