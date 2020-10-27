import formData from './newProjectProperties.json';

const findChild = (key, data) => {
    const child = data.find(item => item.parent === key);
    return setUpState(child.details)
}

const setValue = (object, item) => {
    switch (object[item].value) {
        case 'boolean':
            return object[item].defaultValue ? object[item].defaultValue : '';
        case 'string':
            return '';
        case 'array':
            return [];
        case 'object':
            return {};
        default:
            return null
    }
}

export const setUpState = (object) => {
    const newState = {};
    Object.keys(object).map(item => newState[item] = setValue(object, item));
    return newState
}