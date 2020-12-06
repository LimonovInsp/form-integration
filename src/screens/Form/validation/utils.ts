import { InputsErrors, InputsValue } from "../types";
import { symbolsRegex } from "./constants";

export const checkNumberRate = (number: string) => {
    const integer = Number(number);
    return integer >= 1 && integer <= 99;
}

export const checkSpecialSymbols = (input: string) => {
    return symbolsRegex.test(input);
}

export const errorsList = (inputs: InputsValue) => {
    const errors = {} as InputsErrors;
    Array.from(Object.keys(inputs)).forEach((input: string) => {
        errors[input] = [];
    })

    return errors;
}

export const isEmpty = (errors: InputsErrors) => {
    return Object.keys(errors).length === 0;
}
