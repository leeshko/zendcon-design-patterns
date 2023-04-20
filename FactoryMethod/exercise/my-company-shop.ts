import { ProductCreator, ProductInterface } from './shopping-cart-framework'
export class ProductCatalogA extends ProductCreator {
    constructor(private catalogDb: ProductCatalogDB){
        super()
        this.catalogDb = catalogDb
    }
    public createProduct(code: string): ProductInterface {
        return new MyShopProduct(this.catalogDb[code], code)
    }
}

interface ProductCatalogDB {
    [code: string]: string
}

export class MyShopProduct implements ProductInterface {
    constructor(private description: string, private code: string){
        this.description = description;
        this.code = code;
    }
        getShopDescription() {
            return this.description
        }
        getShopProductCode() {
            return this.code
        }
    
}
