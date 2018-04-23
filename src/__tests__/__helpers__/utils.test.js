import utils from '../../js/helpers/utils';


describe('bemClasses', () => {

    test('no modifiers', () => {

        expect(utils.bemClasses('some-component')).toBe('some-component');
    });

    test('1 string modifier', () => {

        expect(utils.bemClasses('some-component', 'mod')).toBe('some-component some-component--mod');
    });

    test('couple of modifiers in string', () => {

        expect(utils.bemClasses('some-component', 'huge lazy dog'))
            .toBe('some-component some-component--huge some-component--lazy some-component--dog');
    });

    test('empty array', () => {

        expect(utils.bemClasses('some-component', [])).toBe('some-component');
    });

    test('couple of modifiers in array', () => {

        expect(utils.bemClasses('some-component', ['huge', 'lazy', 'dog']))
            .toBe('some-component some-component--huge some-component--lazy some-component--dog');
    });

});
