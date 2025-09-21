const arr =  [
  true, 'hello', 5, 12, -200, false, false, 'word', 3.14, 'JavaScript', true, 0, -50, 'test', false
];
const obj = {number:0, string:0, boolean:0};
for (const item of arr) {
    const type = typeof item;
    if (type === 'number') {
        obj.number += 1;
    } else if (type === 'string') {
        obj.string += 1;
    } else if (type === 'boolean') {
        obj.boolean += 1;
    }
    }
console.dir(obj);
  