import React from 'react';
import { TemplateProps } from "./types";
import StylesGeneral from "./styles";

const Template: React.FC<TemplateProps> = ({ headline}) => {
    const classesGeneral = StylesGeneral;
    return <div style={{ display: 'flex', justifyContent: 'center', padding: 20}}>
        <h1 style={classesGeneral.headlineGeneral}>{headline}</h1>
    </div>
}

export default Template;
