const object = {a:1, b:2, c:3}
function callback(key, value) {
    console.log({key : key,value : value})
}
function iterate(obj, callback) {
    let keys = Object.keys(obj)
    keys.forEach((element, index)=> {
        let value = obj[element]
        callback(element, value)
    })
}
iterate(object,callback)