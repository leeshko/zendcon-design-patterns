class PayPal {
   constructor(private email: string, private password: string) {}

    transfer(email: string, amount: string) {
        return `Paypal: ${amount} successfully transferred to ${email}!`;
    }
}

class CreditCard {
    constructor(private number: string, private expiration: string) {}

    authorizeTransaction(amount: number) {
        return `Authorization code for amount ${amount}: 234da`;
    }
}

interface PaymentAdapterInterface {
    collectMoney(amount: number): boolean;
}

class CrediCardAdapter implements PaymentAdapterInterface {

}

class PayPalAdapter implements PaymentAdapterInterface {

}
