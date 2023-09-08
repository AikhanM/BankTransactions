function BankAccount(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    if( typeof amount !== "number"){
      throw new Error("Amount must be a number");
    }

    if(amount < 0){
      throw new Error ("Amount cant be less than zero")
    }

    this.balance += amount;
  };

  BankAccount.prototype.withdraw = function (amount){
    if(amount > this.balance){
        throw new Error ('The amount is bigger than your balance')
    }

   if(typeof amount !== "number"){
      throw new Error("Amount must be a number")
   }

   if(amount < 0){
    throw new Error('You cant withdraw negative amounts');
   }

   return this.balance -= amount
  }

  BankAccount.prototype.getBalance = function (balance){
    return this.balance 
}

module.exports = { BankAccount }

