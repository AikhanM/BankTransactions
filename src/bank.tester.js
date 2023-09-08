const { BankAccount } = require('./bank')

describe("Bank functions,", () => {
    const aykhanBankAcc = new BankAccount ('Aykhan', 1200)
    test("Transactions on Aykhan's bank account", () => {
        expect(aykhanBankAcc.getBalance()).toBe(1200)
        aykhanBankAcc.deposit(300)
        expect(aykhanBankAcc.getBalance()).toBe(1500)
        aykhanBankAcc.withdraw(900)
        expect(aykhanBankAcc.getBalance()).toBe(600)
    })

    const marshallBankAcc = new BankAccount ('Marshall',6500)
    test("Transactions on Marshall's bank account", () => {
        expect (marshallBankAcc.getBalance()).toBe(6500);
        marshallBankAcc.deposit(3400)
        expect (marshallBankAcc.getBalance()).toBe(9900);
        marshallBankAcc.withdraw(1200)
        expect(marshallBankAcc.getBalance()).toBe(8700)
    })
})