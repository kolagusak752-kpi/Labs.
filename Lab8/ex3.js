function contract(fn, ...types) {
    const types_array = [...types]
    function a(...args) {
        const args_array = [...args]
        for(let i = 0; i <= types_array.length - 2; i++) {
            if(typeof(args_array[i]) !== types_array[i].name.toLowerCase()) {
                throw TypeError("Аргумент не відповідає заданому типу")
            }
        }
        if (typeof(fn(...args)) !== types_array[types_array.length - 1].name.toLowerCase()) {
            throw TypeError("Результат не відповідає заданому типу ")
        }
        return(fn(...args))
    }
    return a
    }
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(3, 2);
console.dir(res); // Output: 5
    
