import React from 'react';
import StylesGeneral from './styles';
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({placeholder, label, onBlur, errorMessage, required, style, value, name, onChange}) => {
    const classesGeneral = StylesGeneral;
    return (
        <div style={{...classesGeneral.inputWrapper, ...style}}>
           <div style={classesGeneral.inputLabelWrapper}>
               <span style={classesGeneral.inputLabel}>{label}</span>
               {required ? <span style={classesGeneral.inputRequiredNotice}>*</span> : ''}
           </div>
            <input className="InputField" value={value} style={{...classesGeneral.input,...Boolean(errorMessage) && classesGeneral.inputError}} onBlur={() => onBlur(name)} name={name} onChange={onChange} placeholder={placeholder} />
            {errorMessage && <span style={classesGeneral.inputErrorMessage}>{errorMessage}</span>}
        </div>
    )
}

export default Input;