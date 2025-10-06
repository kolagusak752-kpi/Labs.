const products = [
   {name: "Laptop", price: 1000, category: "electronics", inStock: true },
  { name: "Phone", price: 500, category: "electronics", inStock: false },
  { name: "Shirt", price: 50, category: "clothing", inStock: true },
  { name: "Shoes", price: 80, category: "clothing", inStock: false },
  { name: "Book", price: 20, category: "books", inStock: true },
];
const result = products.map(product => product.name)
console.log(result)
const instock = products.filter(product => product.inStock).map(product => product.name)
console.log(instock)
const elect = products.filter(product => product.category === 'electronics')
.map(product => product.name)
const value = products.reduce((acc, product) => acc + product.price, 0)
console.log(elect)
console.log(value)
const array = products.filter(product => product.inStock)
.filter(product => product.price >= 50)
.map(product => ({...product, Discount : product.price * 0.9}))
console.log(array)
