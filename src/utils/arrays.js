export const generateArrayFromNumber = (num) => {
    return Array.from({length: num}, (_, i) => i + 1);
}

export const isNumberMultiple = (number, numMultiplicable) => {
    if (typeof numMultiplicable !== "number") return false;

    return ((numMultiplicable % number === 0) || (numMultiplicable % number === number));
}