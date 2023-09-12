const { BankAccount } = require("./bank");

describe("Bank functions", () => {
  let myAccount;

  beforeEach(() => {
    myAccount = new BankAccount("Ayxan", 1200);
  });

  describe("Deposit functions on bank account", () => {
    test("It should increase account's balance", () => {
      expect(myAccount.getBalance()).toBe(1200);
      myAccount.deposit(300);
      expect(myAccount.getBalance()).toBe(1500);
    });

    test("It must throw an error if deposit value is not number", () => {
      expect(() => myAccount.deposit("120")).toThrow("");
    });

    test("it must throw an error if deposit value is negative", () => {
      expect(() => myAccount.deposit(-100)).toThrow();
    });

    test("it must throw an error if deposite value is falsy", () => {
      expect(() => myAccount.deposit(null)).toThrow("");
      expect(() => myAccount.deposit(undefined)).toThrow("");
    });

    test("it must throw an error if deposite value is empty", () => {
      expect(() => myAccount.deposit(" ")).toThrow("");
    });
  });

  describe("Withdraw functions on bank account", () => {
  test("Withdraw function on bank account", () => {
    expect(myAccount.getBalance()).toBe(1200);
    myAccount.withdraw(900);
    expect(myAccount.getBalance()).toBe(300);
  });

  test("it must throw an error if withdraw value is not number", () => {
    expect(() => myAccount.withdraw('1100').toThrow())
  })

  test("it must throw an error if withdraw value is bigger than amount", () => {
    expect(() => myAccount.withdraw(1300).toThrow());
  });

  test("it must throw an error if withdraw value is negative", () => {
    expect(() => myAccount.withdraw(-40).toThrow());
  });

  test("it must throw an error if withraw value is empty", () => {
    expect(() => myAccount.withdraw()).toThrow();
  });

  test("it must throw an error if withdraw value is falsy", () => {
    expect(() => myAccount.withdraw(null)).toThrow("");
    expect(() => myAccount.withdraw(undefined)).toThrow("");
  });
  });
});


