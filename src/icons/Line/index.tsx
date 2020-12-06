import React from 'react';
import { IconProps } from "../types";

const Line: React.FC<IconProps> = ({ style }) => {
    return (
        <svg width="184" height="2" style={style} viewBox="0 0 184 2" fill="none">
            <rect opacity="0.2" width="184" height="2" rx="1" fill="#E8E8E8"/>
        </svg>

    );
}

Line.defaultProps = {
    width: 184,
    height: 2,
}

export default Line;