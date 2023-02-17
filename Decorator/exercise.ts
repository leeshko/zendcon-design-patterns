interface HtmlElement {
    toString(): string;
    getName(): string;
}

export class InputText implements HtmlElement {
    protected name;
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
    protected element;

    // @todo here the code to implement
}

export class LabelDecorator extends HtmlDecorator {
    protected label;
    setLabel(label) {
        this.label = label;
    }
    toString() {
        const name = this.getName();
        return `<label for="${name}">${this.label}</label> ${this.element.toString()}`;
    }
}

export class ErrorDecorator extends HtmlDecorator {
    protected error;
    setError(message) {
        this.error = message;
    }
    toString() {
        return `<div>${this.element.toString()} <span>${this.error}</span></div>`;
    }
}

const input = new InputText('nickname');
console.log(`InputText without decorator: ${input}`);

const labelled = new LabelDecorator(input);
labelled.setLabel('Nickname:');
console.log(`InputText with LabelDecorator:${labelled}`);

const error = new ErrorDecorator(input);
error.setError('You must enter a unique nickname');
console.log(`InputText with ErrorDecorator:${error}`);

// Label + Error
const labelledError = new ErrorDecorator(labelled);
labelledError.setError('You must enter a unique nickname');
console.log(`InputText with LabelDecorator and ErrorDecorator:${labelledError}`);
