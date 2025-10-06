const sum = (...args) => {
    let total = 0
    let i = 0
    do {
        total += args[i]
        i++
    } while (i < args.length);
    return total
}
d = sum(1,2,3,4,5)
console.log(d)