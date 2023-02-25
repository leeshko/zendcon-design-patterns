export class PayPal {
    constructor(private email: string, private password: string) {}
 
     transfer(email: string, amount: number) {
         // validation process is omitted for simplicity
         return 'Paypal: success!';
     }
 }
 
 export class CreditCard {
     constructor(private number: string, private expiration: string) {}
 
     authorizeTransaction(amount: number) {
         // validation process is omitted for simplicity
         return 'Authorization: success';
     }
 }
 
 interface Product {
     id: number;
     price: number;
     value: string;
 }
 export class Merchant {
     private goods: Product[] = [
         {
             id: 1,
             price: 100,
             value: 'product'
         }
     ];
     constructor(protected payment: PaymentInterface) {}
 
     sell(productId: number): string {
         const product = this.goods.find(({id}) => id === productId);
         if (!product) throw Error('Product not found');
 
         if (this.payment.collectMoney(product.price)) return product.value;
         throw Error('Payment failed');
     }
 }
 
 interface PaymentInterface {
     // todo: here the code to implement
     collectMoney( price: number): boolean;
 }
 
 export class CreditCardAdapter implements PaymentInterface {
     // todo: here the code to implement
     private creditCard: CreditCard;
     constructor(creditCard: CreditCard){
         this.creditCard = creditCard
     }
     collectMoney(price: number) {
         const result = this.creditCard?.authorizeTransaction(price);
         return result === 'Authorization: success'
     }
 }
 
 export class PayPalAdapter implements PaymentInterface {
     // todo: here the code to implement
     private payPal: PayPal;
     constructor(payPal: PayPal){
         this.payPal = payPal
     }
     collectMoney(price: number) {
         const result = this.payPal?.transfer(this.payPal.email, price)
         return result === 'Paypal: success!'
     }
 }
 