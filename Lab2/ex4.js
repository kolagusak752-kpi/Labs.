const arr =  [
  true, 'hello', 5, 12, -200, false, false, 'word', 3.14, 'JavaScript', true, 0, -50, 'test', false
];
const obj = {};
for (const item of arr) {
    const type = typeof item;
    obj[type] = obj[type] + 1 || 1
}
console.dir(obj);