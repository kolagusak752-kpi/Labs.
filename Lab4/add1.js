const now = (date = new Date()) => date.getTime();

const sleep = (interval) => {
    const end = now() + interval
    while(now() < end);
}
    
sleep(5000)
    
const array = [ 5, 4, 2, 1, 3]
array.sort((a, b) => a - b)
console.log(array)
