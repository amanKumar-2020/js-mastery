//  Problem: Smart Discount Filter

const products = [
  { name: "Laptop", price: 120000, category: "electronics" },
  { name: "Shirt", price: 1500, category: "clothing" },
  { name: "Phone", price: 70000, category: "electronics" },
  { name: "Book", price: 600, category: "education" },
  { name: "Shoes", price: 3000, category: "clothing" },
];

function applyDiscount(products, discountFn) {
  const discountProducts = products
    .filter((product) => product.price > 1000)
    .map((event) => {
      return {
        name: event.name,
        price: discountFn(event),
        category: event.category,
      };
    });
  return discountProducts;
}

const discountForElectronics = (product) =>
  product.category === "electronics" ? product.price * 0.9 : product.price;

const discountForClothing = (product) =>
  product.category === "clothing" ? product.price * 0.8 : product.price;

const discountForEducation = (product) =>
  product.category === "education" ? product.price * 0.6 : product.price;

newdiscount = applyDiscount(products, discountForClothing);

console.log(newdiscount);
