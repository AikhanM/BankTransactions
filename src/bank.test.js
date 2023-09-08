const { BankAccount } = require('./bank');

describe('Bank functions', () => {
  let myAccount 

  beforeEach(() => {
    myAccount = new BankAccount("Ayxan", 1200)
  })

  test("Deposit functions on Ayxan's bank account", () => {
    expect(myAccount.getBalance()).toBe(1200);
    myAccount.deposit(300);
    expect(myAccount.getBalance()).toBe(1500)
  
  });

  test("Withdraw function on Ayxan's bank account", () => {
    expect(myAccount.getBalance()).toBe(1200)
    myAccount.withdraw(900);
    expect(myAccount.getBalance()).toBe (300);
  })

  test("It must throw an error if deposit value is wrong", () => {
    expect(() => myAccount.deposit()).toThrow()
    expect(() => myAccount.deposit(-100)).toThrow()
    expect(() => myAccount.deposit('120')).toThrow("")
    expect(() => myAccount.deposit(null)).toThrow("")
    expect(() => myAccount.deposit(undefined)).toThrow("")
})


  test("It must throw an error if withdraw value is wrong", () => {
      expect(() => myAccount.withdraw(1300)).toThrow()
      expect(() => myAccount.withdraw(-100)).toThrow()
      expect(() => myAccount.withdraw()).toThrow()
      expect(() => myAccount.withdraw('120')).toThrow("")
      expect(() => myAccount.withdraw(null)).toThrow("")
      expect(() => myAccount.withdraw(undefined)).toThrow("")
  })
});