function BankAccount(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (this.balance < amount) {
      throw new Error('The amount is bigger than your balance');
    }
  
    this.balance -= amount;
  };
  
  BankAccount.prototype.getBalance = function() {
    return `${this.ownerName}: ${this.balance}`;
  };
  
  module.exports = { BankAccount };
  