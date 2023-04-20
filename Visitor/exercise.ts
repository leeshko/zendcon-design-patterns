abstract class InputValue<T = unknown> {
    constructor(private value: T) {}

    set(value: T): void {
        this.value = value;
    }

    get(): T {
        return this.value;
    }

    abstract acceptVisitor(visitor: Visitor): void;
}

export class SingleInputValue extends InputValue<string | number> {
    // @todo here the code to implement
}

export class MultipleInputValue extends InputValue<(string | number)[]> {
    // @todo here the code to implement
}

export interface Visitor {
    visitSingleInputValue(inputValue: SingleInputValue): void;
    visitMultipleInputValue(inputValue: MultipleInputValue): void;
}

export class IntCaster implements Visitor {
    // @todo here the code to implement
}

export class AscendingSort implements Visitor {
    // @todo here the code to implement
}
