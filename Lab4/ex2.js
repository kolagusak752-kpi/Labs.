const sum = (...args) => {
    let total = 0
    for (const i of args) {
        total += i
    }
    return total
}
b = sum(1,2,3,4,5)
console.log(b)