

// subclass should be substitutable for their parent class
// Inheritance

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        console.log("Ammount withdrawn:", amount);
        this.balance -= amount;
    }
}

class SavingsAccount extends BankAccount {
    constructor(balance, minimumBalance) {
        super(balance);
        this.minimumBalance = minimumBalance;
    }

    withdraw(amount) {
        if (this.balance - amount < this.minimumBalance) {
            throw new Error("Cannot withdraw below minimum balance");
        }
        super.withdraw(amount);
    }
}

// Example usage
const account = new BankAccount(1000);
account.withdraw(200); // Works fine

const savings = new SavingsAccount(1000, 200);
savings.withdraw(800); // Throws error: Cannot withdraw below minimum balance
class FixedDepositAccount extends BankAccount {
    constructor(balance, maturityDate) {
        super(balance);
        this.maturityDate = new Date(maturityDate);
    }

    withdraw(amount) {
        const currentDate = new Date();
        if (currentDate < this.maturityDate) {
            throw new Error("Cannot withdraw before maturity date");
        }
        super.withdraw(amount);
    }
}

// Example usage
const fixedDeposit = new FixedDepositAccount(5000, "2024-12-31");
fixedDeposit.withdraw(1000); // Throws error: Cannot withdraw before maturity date