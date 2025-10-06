const nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const max = (arr) => {
    const usualArray = nums.map((el) => {
      let i = Math.max(...el)
      return i})
      return Math.max(...usualArray)
    }
a = max(nums)
console.log(a)

const maxFast = (arr) => Math.max(...arr.flat())
b = maxFast(nums)
console.log(b)