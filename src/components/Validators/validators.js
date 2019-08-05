export const required = value => {
    if (value) return undefined;
    return 'Field is required.'
}

export const maxLengthCreator = maxLength => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}.`;
    return undefined;
}

export const minLengthCreator = minLength => value => {
    if (value && value.length < minLength) return `Min length is ${minLength}.`;
    return undefined;
}