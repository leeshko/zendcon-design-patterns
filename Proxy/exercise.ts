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
    protected proxyImg: string;

    // @todo here the code to implement
    constructor(proxyImg: string){
        this.proxyImg = proxyImg;
    }

    display(): void {
        if(!this.image) {
            this.image = new CustomImage(this.proxyImg);
        }
        return this.image.display()
    }
}
