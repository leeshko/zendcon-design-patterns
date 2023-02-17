import { CustomImage, ProxyImage } from './exercise';

jest.spyOn(CustomImage.prototype, 'loadFromDisk');
describe('Proxy pattern', () => {
    const FILENAME = 'test.png';

    let loadFromDiskMock: jest.SpyInstance;

    beforeEach(() => {
        loadFromDiskMock = jest.spyOn(CustomImage.prototype, 'loadFromDisk');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    describe('CustomImage', () => {
        let image: CustomImage;

        beforeEach(() => {
            image = new CustomImage(FILENAME);
        });

        it('should load image on creation', () => {
            expect(loadFromDiskMock).toHaveBeenCalled();
        });

        it('should not load image on displaying', () => {
            const result = image.display();

            expect(loadFromDiskMock).toHaveBeenCalledTimes(1);
            expect(result).toEqual(`Display ${FILENAME}`);
        });
    });

    describe('ProxyImage', () => {
        let proxy: ProxyImage;

        beforeEach(() => {
            proxy = new ProxyImage(FILENAME);
        });

        it('should NOT load image on creation', () => {
            expect(loadFromDiskMock).not.toHaveBeenCalled();
        });

        it('should load image ONLY on first display', () => {
            proxy.display();
            proxy.display();

            expect(loadFromDiskMock).toHaveBeenCalledTimes(1);
        });
    });
});
