import React from 'react';
import { TabsCircleProps } from "./types";
import StylesGeneral from "./styles";
import CheckResolution from "../styles/media/checkResolution";
import queries from "../styles/media/breakPoints";
import MediaStyleGeneral from './mediaStyles';

const TabsCircle: React.FC<TabsCircleProps> = ({ children, isActive }) => {
    const classesGeneral = StylesGeneral;
    const classesMedia = MediaStyleGeneral;
    const mediaPoints = CheckResolution(queries) || {
        xs: false,
        sm: false,
    };
    return (
        <span
            style={ { ...mediaPoints.sm ? classesMedia.tabsCircleMedia : classesGeneral.tabsCircle , ...isActive && classesGeneral.tabsCircleActive } }>
            { children }
        </span>
    );
}

export default TabsCircle;