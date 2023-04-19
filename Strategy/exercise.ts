export class Product {
    constructor(
        public name: string,
        public listPrice: number,
        public discountPercent?: number,
        public manufacturer?: string
    ) {}
}

export class ProductCollection {
    private readonly products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    filter(filterStrategy: ProductFilteringStrategy): ProductCollection {
        const filteredProducts: Product[] = [];
        //@TODO use the strategy to filter products that don't meet criteria
        return new ProductCollection(filteredProducts);
    }

    getProductsArray(): Product[] {
        return this.products;
    }
}

export interface ProductFilteringStrategy {
    filter(product: Product): boolean;
}

export class ManufacturerFilter implements ProductFilteringStrategy {
    //@TODO implement a strategy for filtering products by manufacturer
}

export class MaxPriceFilter implements ProductFilteringStrategy {
    //@TODO implement a strategy for filtering products by maximum price
}
