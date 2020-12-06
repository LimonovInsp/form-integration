import { checkNumberRate, checkSpecialSymbols, errorsList } from "./utils";
import {InputsValue} from "../types";
import { minLength } from "./constants";

const validateForm = (inputs: InputsValue) => {
    const { people, business, description, file } = inputs;

    const errors = errorsList(inputs);

    if(people) {
        if(!checkNumberRate(people)) {
            errors.people.push('Please enter number from 1 to 99');
        } else {
            delete errors.people;
        }
    } else if(people === '') {
        errors.people.push('This field in required');
    }

    if(business) {
        if(checkSpecialSymbols(business)) {
            errors.business.push('Only letters and numbers allowed');
        } else {
            delete errors.business;
        }
    } else if(business === '') {
        errors.business.push('This field in required');
    }

    if(description) {
        if(checkSpecialSymbols(description)) {
            errors.description.push('Only letters and numbers allowed');
        } else if(description.length < minLength) {
            errors.description.push('Should be more than 5 characters');
        } else {
            delete errors.description;
        }
    } else if(description === '') {
        errors.description.push('This field in required');
    }

    if(file) {
       if(file.length) {
           delete errors.file;
       } else {
           errors.file.push('At least one file should be added');
        }
    }

    return errors;
}

export default validateForm;
