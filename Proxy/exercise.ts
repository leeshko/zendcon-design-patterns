interface ImageInterface {
    display(): void;
}

class CustomImage implements ImageInterface {
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

class ProxyImage implements ImageInterface {
    protected image;

    // @todo here the code to implement
}

// Usage example

const filename = 'test.png';

const image1 = new Image(filename); // loading necessary
image1.display(); // loading unnecessary

const image2 = new ProxyImage(filename); // loading unnecessary
image2.display(); // loading necessary
image2.display(); // loading unnecessary
