import { InputText, LabelDecorator, ErrorDecorator } from './exercise';

const INPUT_NAME = 'nickname';

describe('Decorator pattern', () => {
    let input: InputText;

    beforeEach(() => {
        input = new InputText(INPUT_NAME);
    });

    describe('simple input', () => {
        it('should return simple input', () => {
            expect(`${input}`)
                .toEqual(`<input type="text" id="${INPUT_NAME}" name="${INPUT_NAME}" />`);
        });
    });

    describe('labelled input', () => {
        it('should return labelled input', () => {
            const LABEL = 'Nickname:';

            const labelled = new LabelDecorator(input);
            labelled.setLabel(LABEL);

            expect(`${labelled}`)
                .toEqual(`<label for="${INPUT_NAME}">${LABEL}</label> <input type="text" id="${INPUT_NAME}" name="${INPUT_NAME}" />`)
        });
    });

    describe('input with error', () => {
        it('should return input with error', () => {
            const ERROR = 'You must enter a unique nickname';

            const wrongInput = new ErrorDecorator(input);
            wrongInput.setError(ERROR);

            expect(`${wrongInput}`)
                .toEqual(`<input type="text" id="${INPUT_NAME}" name="${INPUT_NAME}" /> <span>${ERROR}</span>`);
        });
    });

    describe('labelled input with error', () => {
        it('should return labelled input with error', () => {
            const LABEL = 'Nickname:';
            const ERROR = 'You must enter a unique nickname';

            const labelled = new LabelDecorator(input);
            labelled.setLabel(LABEL);

            const wrongLabelledInput = new ErrorDecorator(labelled);
            wrongLabelledInput.setError(ERROR);

            expect(`${wrongLabelledInput}`)
                .toEqual(`<label for="${INPUT_NAME}">${LABEL}</label> <input type="text" id="${INPUT_NAME}" name="${INPUT_NAME}" /> <span>${ERROR}</span>`)
        });
    });
});
