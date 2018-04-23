export default {

    /**
     * Generates (sub)component class + modifier classes.
     *
     * @param {string} componentName - component name, can be subcomponent name
     * @param {string[]|string} modifiers - array, or sting with space-separated modifiers
     * @return {string} - ex. 'componentName componentName--modifier1 componentName--modifier2'
     */
    bemClasses(componentName, modifiers = []) {
        let classes = componentName;

        if (modifiers.length) {
            if (typeof modifiers === 'string' && modifiers.trim().length) {
                modifiers = modifiers.trim().split(' ');
            }

            for (const modifier of modifiers) {
                classes += ` ${componentName}--${modifier}`;
            }
        }

        return classes;
    }

}
