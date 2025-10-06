const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1) + min)
}
x = Math.floor(Math.random() * 10000);
y = Math.floor(Math.random() * (100000 - x + 1) + x);
console.log(random(x, y)); 