const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
function generateKey(length, set) {
    let result = ''
    for (let i = 0; i < length; i++) {
        const x = Math.floor(Math.random() * set.length);
        const y = set[x];
        result += y
   } 
return result
}
console.log(generateKey(50, characters));