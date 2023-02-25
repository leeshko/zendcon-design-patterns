interface HtmlElement {
    toString(): string;
    getName(): string;
}

export class InputText implements HtmlElement {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    toString() {
        return `<input type="text" id="${this.name}" name="${this.name}" />`;
    }
}

abstract class HtmlDecorator implements HtmlElement {
    // @todo here the code to implement
    protected element: HtmlElement;
    constructor(element: HtmlElement) {
        this.element = element;
    }
    getName(): string {
        return this.element.getName();
    }
    toString() {
        return `${this.element}`;
    }
}

export class LabelDecorator extends HtmlDecorator {
    protected label?: string;
    setLabel(label: string) {
        this.label = label;
    }
    toString() {
        const name = this.getName();
        return `<label for="${name}">${this.label}</label> ${this.element.toString()}`;
    }
}

export class ErrorDecorator extends HtmlDecorator {
    protected error?: string;
    setError(message: string) {
        this.error = message;
    }
    toString() {
        return `${this.element.toString()} <span>${this.error}</span>`;
    }
}
