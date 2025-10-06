const Tonumber = (ip = '127.0.0.1') => {
    return ip.split('.').map(Number).reduce((acc, el, i) => acc + (el << (8 * (3 - i))), 0)
}
console.log(Tonumber())
console.log(Tonumber('10.0.0.1'))

