// Task 1: Declare a variable in  scope called customerName using the var keyword.
var totalAmount = 0;
var bestCustomer = {
  name: "",
  totalAmount: 0,
};

function calculateTotalAmount(orders) {
  // Using var for loop variable to simulate block-level scope
  for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].totalAmount;
  }
  return totalAmount;
}

function findBestCustomer(orders) {
  // Using var for loop variable to simulate block-level scope
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].totalAmount > bestCustomer.totalAmount) {
      bestCustomer.name = orders[i].customerName;
      bestCustomer.totalAmount = orders[i].totalAmount;
    }
  }
  return bestCustomer;
}

function updateCustomerDatabase(orders) {
  // Task 3: Declare a variable from inside a function and assign a value.
  totalAmount = calculateTotalAmount(orders);
  bestCustomer = findBestCustomer(orders);

  console.log("Total amount of all orders: ", totalAmount);
  console.log("Best customer: ", bestCustomer.name);
}

updateCustomerDatabase([
  { customerName: "John", totalAmount: 200 },
  { customerName: "Mary", totalAmount: 300 },
  { customerName: "Alice", totalAmount: 100 },
]);
