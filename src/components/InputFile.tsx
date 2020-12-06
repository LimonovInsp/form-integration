import React from 'react';
import StylesGeneral from './styles';
import { InputFileIcon } from '../icons';
import { InputProps } from "./types";
import MediaStyleGeneral from './mediaStyles';
import CheckResolution from "../styles/media/checkResolution";
import queries from "../styles/media/breakPoints";


const InputFile: React.FC<InputProps> = ({name, errorMessage, onBlur, fileCounter, value, onChange}) => {
    const classesGeneral = StylesGeneral;
    const mediaClasses = MediaStyleGeneral;
    const mediaPoints = CheckResolution(queries) || {
        xs: false,
        sm: false,
    };
    return (
        <div style={ classesGeneral.inputFileWrapper }>
            <div style={ {
                ...classesGeneral.inputFile, ...Boolean( errorMessage ) && classesGeneral.inputError, ...mediaPoints.xs && mediaClasses.inputFileMedia
            } }>
                <input type="file" id="file" accept="image/*" style={ classesGeneral.inputFileResolution }
                       value={ value } name={ name } onChange={ onChange }/>
                <label tabIndex={ 0 } htmlFor="file" id="file" onBlur={ ( event ) => onBlur( event.target.id ) }
                       style={{...classesGeneral.inputFileLabel, ...mediaPoints.xs && mediaClasses.inputFileLabelMedia}}>
                    <div style={ classesGeneral.inputFileIcon }>{ <InputFileIcon/> }</div>
                    <div style={ classesGeneral.inputFileDescription }>Add file as attachment</div>
                </label>
                <span style={ classesGeneral.inputFileCounter }>{ `${ fileCounter } files attached` }</span>
            </div>
            { errorMessage && <span style={ classesGeneral.inputErrorMessage }>{ errorMessage }</span> }
        </div>
    )
}

export default InputFile;