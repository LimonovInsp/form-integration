import React, {useState, FormEvent, ChangeEvent} from 'react';
import FormStyles from '../styles';
import FormMediaStyle from '../mediaStyles';
import Input from "../../../components/Input";
import typography from "../../../styles/typography";
import InputFile from "../../../components/InputFile";
import {InputsValue} from "../types";
import Textarea from "../../../components/Textarea";
import validateForm from "../validation/validateForm";
import {InputsErrors} from "../types";
import {isEmpty} from "../validation/utils";
import CheckResolution from "../../../styles/media/checkResolution";
import queries from '../../../styles/media/breakPoints';

const Form: React.FC = () => {
    const classes = FormStyles;
    const mediaClasses = FormMediaStyle;

    const mediaPoints = CheckResolution(queries) || {
        xs: false,
        sm: false,
    };
        const [inputsValue, setInputsValue] = useState<InputsValue>({
            company : '',
            people : '',
            business : '',
            description : '',
            file : [],
        });
    const [errors, setErrors] = useState<InputsErrors>({});

    const validation = validateForm({
        people : inputsValue.people,
        business : inputsValue.business,
        description : inputsValue.description,
        file : inputsValue.file,
    });


    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement & EventTarget>) => {
        setInputsValue({
            ...inputsValue,
            [event.target.name] : event.target.value,
        });

        if (event.target.name === 'file') {
            setInputsValue({
                ...inputsValue,
                [event.target.name] : [
                    // @ts-ignore
                    ...inputsValue.file,
                    // @ts-ignore
                    (event.target as HTMLInputElement).files[0],
                ]
            });
        }

        setErrors({
            ...errors,
            [event.target.name] : [],
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(mediaPoints);

        if (isEmpty(validation)) {
            console.log(inputsValue);

            setInputsValue({
                company : '',
                people : '',
                business : '',
                description : '',
                file : [],
            });

            setErrors({});
        } else {
            setErrors(validation);
        }
    }

    const onBlur = (event: string) => {
        setErrors(
            {
                ...errors,
                ...validateForm({
                    // @ts-ignore
                    [event] : inputsValue[event],
                })
            }
        );
    }

    return (
        <div style={{...classes.formWrapper, ...mediaPoints.sm && mediaClasses.formWrapperMedia}}>
            <form onSubmit={ handleSubmit }>
                <div
                    style={{...classes.formInputsGroup, ...mediaPoints.sm && mediaClasses.formInputsGroupMedia} }>
                    <Input onBlur={ onBlur } onChange={ onChange } value={ inputsValue.company } name="company"
                           placeholder="Type text" label="Your company name"
                           style={ !mediaPoints.sm ?
                           { width : '60%' } : { width: '100%' }}/>
                    <Input onBlur={ onBlur } errorMessage={ errors.people ? errors.people[0] : '' }
                           onChange={ onChange } value={ inputsValue.people } name="people" placeholder="1-99"
                           label="Number of people" required
                           style={ !mediaPoints.sm ? {
                               marginLeft : typography.marginBig,
                               width : '40%'
                           } : {marginTop: typography.marginBig }}/>
                </div>
                <Input onBlur={ onBlur } errorMessage={ errors.business ? errors.business[0] : '' }
                       onChange={ onChange } value={ inputsValue.business } name="business"
                       placeholder="Design, Marketing, Development, etc." label="Business area"
                       style={ { marginBottom : typography.marginBig } } required />
                <Textarea onBlur={ onBlur } errorMessage={ errors.description ? errors.description[0] : '' }
                          label="Description" name="description" value={ inputsValue.description } onChange={ onChange }
                          placeholder="Type text" required/>
                <InputFile onBlur={ onBlur } fileCounter={ inputsValue.file?.length }
                           errorMessage={ errors.file ? errors.file[0] : '' } name="file" onChange={ onChange }/>
                <button style={ classes.button } type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
