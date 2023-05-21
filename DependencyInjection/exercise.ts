import { v4 as uuid } from "uuid";

type DBInitialRecord<T> = T extends Record<string, unknown>
  ? T extends { _id: any }
    ? never
    : T
  : never;

type DBIndexType = string;

type DBRecord<T> = T & { _id: DBIndexType };

export class Database<T> {
  protected state: DBRecord<T>[];
  constructor(initialState: DBInitialRecord<T>[]) {
    this.state = initialState.reduce<DBRecord<T>[]>((state, item) => {
      return [...state, { _id: uuid(), ...item }];
    }, []);
  }

  getByID(id: DBIndexType): T | null {
    return this.state.find(({ _id }) => _id === id) || null;
  }

  setByID(id: DBIndexType, item: T): void | never {
    const index = this.state.findIndex(({ _id }) => _id === id) || null;
    if (index !== null) {
      this.state[index] = { ...item, _id: id };
      return;
    }

    throw Error("Invalid ID");
  }

  addNewRecord(item: T): DBRecord<T> {
    const _id = uuid();
    this.state.push({ ...item, _id });
    return ({ ...item, _id });
  }
}

export class UsersManager<T> {
  constructor(public DB: any) {}
  search(id: string) {
    return `User ID ${id}: ${JSON.stringify(this.DB.getByID(id))}`;
  }
}

export class ProductsListManager<T> {
  constructor(private productsDB: Database<T>){
    this.productsDB = productsDB
  }
  addItem(item: T){
    return this.productsDB.addNewRecord(item)
  }
  getItem(id: DBIndexType){
    return this.productsDB.getByID(id)
  }
}
