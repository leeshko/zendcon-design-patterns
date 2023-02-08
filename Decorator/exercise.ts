interface HtmlElement {
    __toString(): string;
    getName(): string;
}

class InputText implements HtmlElement {
    protected name;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    __toString() {
        return `<input type="text" id="${this.name}" name="${this.name}" />`;
    }
}

abstract class HtmlDecorator implements HtmlElement {
    protected element;

    // @todo here the code to implement
}

class LabelDecorator extends HtmlDecorator {
    protected label;
    setLabel(label) {
        this.label = label;
    }
    __toString() {
        const name = this.getName();
        return `
            <label for="${name}">${this.label}</label>
            ${this.element.__toString()}
        `;
    }
}

class ErrorDecorator extends HtmlDecorator {
    protected error;
    setError(message) {
        this.error = message;
    }
    __toString() {
        return `
            ${this.element.__toString()}<span>${this.error}</span>
        `;
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
