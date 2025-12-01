function store(value) {
    function read() {
        return value
    }
    return read
    
}
const read = store(5);
const value = read();
console.log(value);