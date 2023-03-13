const services = [
  {
    name: "Elaborare unei aplicații mobile",
    price: 15.00,
    duration: 3
  },
  {
    name: "Elaborarea unui site web",
    price: 6.50,
    duration: 2
  },
  {
    name: "Elaborarea unei aplicații desktop",
    price: 127.00,
    duration: 120
  }
];

const findHigherPricePerHour = (services) => {
  let highest_price = -Infinity;
  let highest_price_product = null;

  for (const service of services) {
    const price_per_hour = service.price / service.duration;
    if (price_per_hour > highest_price) {
      highest_price = price_per_hour;
      highest_price_product = service;
    }
  }

  return highest_price_product;
}

const calculateTotalCost = (products) => {
  let total_cost = 0;

  for (const product of products) {
    total_cost += product.price;
  }

  return total_cost;
}

console.log(findHigherPricePerHour(services));
console.log(calculateTotalCost(services));
