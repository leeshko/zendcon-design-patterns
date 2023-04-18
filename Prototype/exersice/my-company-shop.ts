import { ProductInterface, Prototype } from './shopping-cart-framework';

interface ShopInfo {
    name: string;
    email: string;
}

export class MyShopProduct implements ProductInterface, Prototype {
    protected code: any;
    protected description: any;

    constructor(protected productService: any, public shopInfo: ShopInfo) {}

    // TODO: here the code to implement
}
