const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}
const Toarray = (object) => {
    const result = Object.keys(object).filter(key => typeof object[key] === 'function')
    .map( key => [key, object[key].length])
    return result
}
console.log(Toarray(iface))