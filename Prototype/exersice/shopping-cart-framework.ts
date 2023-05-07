export interface Prototype {
    // TODO: here the code to implement
    clone(): this
}
export interface ProductInterface {
    initialize(code: any): void;
    getShopProductCode(): string;
    getShopDescription(): string;
}

export class Shop {
    protected productPrototype: ProductInterface & Prototype;

    constructor(productPrototype: ProductInterface & Prototype) {
        this.productPrototype = productPrototype;
    }

    listProducts(codes: any[]): string {
        const output: string[] = [];
        for (const code of codes) {
            // TODO: here the code to implement
            const product = this.productPrototype.clone();
            product.initialize(code);
            output.push(`${product.getShopProductCode()} - ${product.getShopDescription()}`);
        }
        return output.join('\n');
    }
}
