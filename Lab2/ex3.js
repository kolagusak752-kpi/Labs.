const average = (a, b) => (a + b) / 2;
console.log(average(5, 10));

const square = (x) => x * x;
console.log(square(4));

const cube = (x) => x * x * x;
console.log(cube(3));

const calculate = () => {
    arr = []
    for (let i = 0; i <= 9; i ++) {
        result = average(square(i), cube(i));
        arr.push(result);
    }
    return arr;
}
console.log(calculate());