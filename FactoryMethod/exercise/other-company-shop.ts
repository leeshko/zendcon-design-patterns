import { ProductCreator, ProductInterface } from './shopping-cart-framework'
export class ProductCatalogB extends ProductCreator {
    constructor(private catalogDB: ProductCatalogBDB) {
        super()
        this.catalogDB = catalogDB
    }
    createProduct(code: string): ProductInterface {
        return new MyShopProduct(this.catalogDB, code)
    }
    getMarketingDescription(code: string): string {
        const shop = this.createProduct(code)
        return `${shop.getShopProductModel()} ${shop.getShopProductCode()}: ${shop.getShopDescription()}`
    }
}

export interface ProductCatalogBDB {
    [code: string]: [string, string]
}

export class MyShopProduct implements ProductInterface {
    constructor(private catalogDB: ProductCatalogBDB, private code: string){
        this.code = code;
        this.catalogDB = catalogDB;
    }
    getShopProductCode(): string {
        return `${this.code}`
    }
    getShopProductModel(): string {
        return `${this.catalogDB[this.code][1]}`
    }
    getShopDescription(): string {
        return `${this.catalogDB[this.code][0]}`
    }


}
