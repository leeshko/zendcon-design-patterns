interface ImageInterface {
    display(): void;
}

export class CustomImage implements ImageInterface {
    protected filename: string;
    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk();
    }
    loadFromDisk() {
        console.log(`Loading ${this.filename}`);
    }
    display() {
        return `Display ${this.filename}`;
    }
}

export class ProxyImage implements ImageInterface {
    protected image;

    // @todo here the code to implement
}
