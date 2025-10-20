const array = () => {
    const arr = []
    function a(index) {
        return arr[index]
    }
     a.push = (value) => {arr.push(value)}       
     a.pop = () => arr.pop()
        return a
}
const b = array();

b.push('first');
b.push('second');
b.push('third');

console.log(b(0)); // Выводит: first
console.log(b(1)); // Выводит: second
console.log(b(2)); // Выводит: third

console.log(b.pop()); // Выводит: third
console.log(b.pop()); // Выводит: second
console.log(b.pop()); // Выводит: first

console.log(b.pop()); // Выводит: undefined