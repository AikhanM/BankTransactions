const { BankAccount } = require('./bank');

describe('Bank functions', () => {
  const aykhanBankAcc = new BankAccount('Aykhan', 1200);

  test("Transactions on Aykhan's bank account", () => {
    expect(aykhanBankAcc.getBalance()).toBe('Aykhan: 1200');
    aykhanBankAcc.deposit(300);
    expect(aykhanBankAcc.getBalance()).toBe('Aykhan: 1500');
    aykhanBankAcc.withdraw(900);
    expect(aykhanBankAcc.getBalance()).toBe('Aykhan: 600');
  });

  const marshallBankAcc = new BankAccount('Marshall', 6500);

  test("Transactions on Marshall's bank account", () => {
    expect(marshallBankAcc.getBalance()).toBe('Marshall: 6500');
    marshallBankAcc.deposit(3400);
    expect(marshallBankAcc.getBalance()).toBe('Marshall: 9900');
    marshallBankAcc.withdraw(1200);
    expect(marshallBankAcc.getBalance()).toBe('Marshall: 8700');
  });


  const tupacBankAcc = new BankAccount('Tupac', 13000) 
  
  test("Transaction on Tupac's bank account", () => {
    expect(tupacBankAcc.getBalance()).toBe("Tupac: 13000")
    expect(() => tupacBankAcc.withdraw(14000)).toThrow('The amount is bigger than your balance')    
  })
});