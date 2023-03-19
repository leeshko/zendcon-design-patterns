import {
  ProductData,
  ProductInterface,
  ShippingMethodData,
  ShippingMethodInterface,
  ShopFactoryInterface,
} from "./shopping-cart-framework";

export class MyShopProductFactory implements ShopFactoryInterface {
  private productCode;
  private shippingMethodName;
  constructor(
    productCode: ProductData,
    shippingMethodName: ShippingMethodData
  ) {
    this.productCode = productCode;
    this.shippingMethodName = shippingMethodName;
  }
  createProduct(productCode: keyof ProductData): ProductInterface {
    return new MyShopProduct(
      productCode,
      this.productCode[productCode][0],
      this.productCode[productCode][1]
    );
  }
  createShippingMethod(
    shippingMethodName: keyof ShippingMethodData
  ): ShippingMethodInterface {
    return new MyShippingMethod(
      shippingMethodName,
      this.shippingMethodName[shippingMethodName][0],
      this.shippingMethodName[shippingMethodName][1]
    );
  }
}

export class MyShopProduct implements ProductInterface {
  public _productCode: keyof ProductData;
  public _productDescription: ProductData[keyof ProductData][0];
  public _productWeight: ProductData[keyof ProductData][1];

  constructor(
    productCode: keyof ProductData,
    productDescription: ProductData[keyof ProductData][0],
    productWeight: ProductData[keyof ProductData][1]
  ) {
    this._productCode = productCode;
    this._productDescription = productDescription;
    this._productWeight = productWeight;
  }
  get productCode(): keyof ProductData {
    return this._productCode;
  }
  get productDescription(): ProductData[keyof ProductData][0] {
    return this._productDescription;
  }
  get productWeight(): ProductData[keyof ProductData][1] {
    return this._productWeight;
  }
}

export class MyShippingMethod implements ShippingMethodInterface {
  private shippingMethodName: keyof ShippingMethodData;
  private miles: number;
  private weight: number;
  constructor(
    shippingMethodName: keyof ShippingMethodData,
    miles: number,
    weight: number
  ) {
    this.shippingMethodName = shippingMethodName;
    this.miles = miles;
    this.weight = weight;
  }

  public get courierName(): string | number {
    return this.shippingMethodName;
  }
  getCostEstimate(miles: number, product: ProductInterface): number {
    return miles * this.miles + product.productWeight * this.weight;
  }
}
