//  THIS IS VOILATION OF SINGLE RESPONSIBILITY PRINCIPLE
class Product {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }
    addProduct() {
        this.products.push(...arguments);
    }

    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    getInvoice() {
        let invoice = "Invoice:\n";
        this.products.forEach(product => {
            invoice += `${product.name}: $${product.price}\n`;
        });
        invoice += `Total: $${this.calculateTotal()}`;
        return invoice;
    }

    saveToDB() {
        return "Saved to Database";
    }
}

// Correct way to SRP

class GetInvoice {
    constructor(cart) {
        this.cart = cart;
    }

    generate() {
        let invoice = "Invoice:\n";
        this.cart.products.forEach(product => {
            invoice += `${product.name}: $${product.price}\n`;
        })
        return invoice + `Total: $${this.cart.calculateTotal()}`;
    }
}

class CalculateTotal {
    constructor(cart) {
        this.cart = cart;
    }

    getTotal() {
        return this.cart.products.reduce((total, product) => total + product.price, 0);
    }
}

class addProduct {
    constructor(cart) {
        this.cart = cart;
    }

    add(...products) {
        this.cart.products.push(...products);
    }
}

// Example usage
const cart = new ShoppingCart();
// const product1 = new Product("Laptop", 1000);
// const product2 = new Product("Mouse", 50);
// cart.addProduct(product1, product2);
// console.log(cart.getInvoice());
// console.log(cart.saveToDB());
const addProducts = new addProduct(cart);
addProducts.add(new Product("Keyboard", 100), new Product("Monitor", 300));
console.log(new GetInvoice(cart).generate());
console.log(new CalculateTotal(cart).getTotal());


