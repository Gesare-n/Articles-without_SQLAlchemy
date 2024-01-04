class Customer {
    constructor(name, table) {
       this.name = name;
       this.table = table;
       this.order = [];
    }
   
    addToOrder(item) {
       this.order.push(item);
    }
   
    removeFromOrder(item) {
       const index = this.order.indexOf(item);
       if (index > -1) {
         this.order.splice(index, 1);
       }
    }
   
    getTotalOrderValue() {
       return this.order.reduce((total, item) => total + item.price, 0);
    }
   }
   
   class Waiter {
    constructor(name) {
       this.name = name;
       this.servedCustomers = [];
    }
   
    takeOrder(customer) {
       this.servedCustomers.push(customer);
    }
   
    getTotalServedAmount() {
       return this.servedCustomers.reduce((total, customer) => total + customer.getTotalOrderValue(), 0);
    }
   }
   
   class Restaurant {
    constructor(name) {
       this.name = name;
       this.customers = [];
       this.waiters = [];
    }
   
    addCustomer(customer) {
       this.customers.push(customer);
    }
   
    addWaiter(waiter) {
       this.waiters.push(waiter);
    }
   
    getTotalSales() {
       return this.waiters.reduce((total, waiter) => total + waiter.getTotalServedAmount(), 0);
    }
   }
   
   // Create a restaurant, add customers and waiters to it, and perform various operations
   const restaurant = new Restaurant('My Restaurant');
   
   const customer1 = new Customer('John', 1);
   const customer2 = new Customer('Jane', 2);
   
   const waiter1 = new Waiter('Bob');
   const waiter2 = new Waiter('Alice');
   
   restaurant.addCustomer(customer1);
   restaurant.addCustomer(customer2);
   restaurant.addWaiter(waiter1);
   restaurant.addWaiter(waiter2);
   
   customer1.addToOrder({ name: 'Burger', price: 10 });
   customer1.addToOrder({ name: 'Fries', price: 5 });
   customer2.addToOrder({ name: 'Pizza', price: 15 });
   customer2.addToOrder({ name: 'Soda', price: 3 });
   
   waiter1.takeOrder(customer1);
   waiter2.takeOrder(customer2);
   
   console.log('Total sales:', restaurant.getTotalSales());