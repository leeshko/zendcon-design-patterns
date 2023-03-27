export class Product {
    constructor(
        public name: string,
        public price: string,
        public manufacturer: Manufacturer
    ) {}
}

export class Manufacturer {
    constructor(
        public name: string,
        public url: URL
    ) {}
}

export interface DBRecord {
    name: string;
    price: number;
    manufacturerName: string;
    manufacturerUrl: string;
}

export class ProductMapper {
    // @todo: here the code to implement
}
