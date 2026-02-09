// Find the first product out of stock

function findOutOfStock(products) {
  return products.find(p => p.stock === 0)
}

const products = [
  { name: 'Pen', stock: 10 },
  { name: 'Book', stock: 0 }
]

const result = findOutOfStock(products)
console.log("test: ", result)