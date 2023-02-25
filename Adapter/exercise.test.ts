import {Merchant, CreditCardAdapter, PayPalAdapter, CreditCard, PayPal} from "./exercise";

const creditCardPaymentSpy = jest.spyOn(CreditCard.prototype, 'authorizeTransaction');
const payPalPaymentSpy = jest.spyOn(PayPal.prototype, 'transfer');

const TEST_PRODUCT = {
    id: 1,
    price: 100,
    value: 'product',
}
describe('Adapter pattern', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('CreditCardAdapter', () => {
        let creditCard: CreditCard;
        let adapter: CreditCardAdapter;
        let merchant: Merchant;

        beforeEach(() => {
            creditCard = new CreditCard('4524431137357774', '12/31');
            adapter = new CreditCardAdapter(creditCard);
            merchant = new Merchant(adapter);
        });

        it('should return correct product with credit card', () => {
            const product = merchant.sell(TEST_PRODUCT.id);
            expect(product).toEqual(TEST_PRODUCT.value);
        });

        it('should call payment processor payment method', () => {
            merchant.sell(TEST_PRODUCT.id);
            expect(creditCardPaymentSpy).toHaveBeenCalledTimes(1);
            expect(creditCardPaymentSpy).toHaveBeenCalledWith(TEST_PRODUCT.price);
        });
    });

    describe('PayPalAdapter', () => {
        let payPal: PayPal;
        let adapter: PayPalAdapter;
        let merchant: Merchant;

        beforeEach(() => {
            payPal = new PayPal('user@email.test', 'password');
            adapter = new PayPalAdapter(payPal);
            merchant = new Merchant(adapter);
        });

        it('should return correct product with paypal', () => {
            const product = merchant.sell(TEST_PRODUCT.id);
            expect(product).toEqual(TEST_PRODUCT.value);
        });

        it('should call payment processor payment method', () => {
            merchant.sell(TEST_PRODUCT.id);
            expect(payPalPaymentSpy).toHaveBeenCalledTimes(1);
            expect(payPalPaymentSpy).toHaveBeenCalledWith('user@email.test', TEST_PRODUCT.price);
        });
    });
});
