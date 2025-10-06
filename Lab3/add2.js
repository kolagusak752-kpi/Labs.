const products = [
  { name: "Laptop", price: 1000, category: "electronics", inStock: true },
  { name: "Phone", price: 500, category: "electronics", inStock: false },
  { name: "Shirt", price: 50, category: "clothing", inStock: true },
  { name: "Shoes", price: 80, category: "clothing", inStock: false },
  { name: "Book", price: 20, category: "books", inStock: true },
];
const result = products.map((product, index) => ({...product, id: index + 1}))
const grouped = products.reduce((acc, product) => {
  // если категории ещё нет — создаём пустой массив
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  // добавляем товар в массив своей категории
  acc[product.category].push(product);
  
  return acc; // возвращаем аккумулятор на следующую итерацию
}, {}); // {} — начальное значение аккумулятора

console.log(grouped);
