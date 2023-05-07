import { ProductInterface, Prototype } from './shopping-cart-framework';

interface ShopInfo {
    name: string;
    email: string;
}

export class MyShopProduct implements ProductInterface, Prototype {
    protected code: any;
    protected description: any;

    constructor(protected productService: any, public shopInfo: ShopInfo) {
        this.productService = productService,
        this.shopInfo = shopInfo
    }

    // TODO: here the code to implement
    public clone(){
        return Object.create(this)
    }
    public initialize(code: any): void {
        this.code = code;
    }
    public getShopDescription(): string {
        return this.productService(this.code)
    }
    public getShopProductCode(): string {
        return this.code
    }
}
