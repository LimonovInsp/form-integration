import { Style } from "../types/styleTypes";
import palette from "../styles/palette";
import typography from "../styles/typography";

const MediaStyleGeneral: Style = {
    inputFileMedia: {
        flexDirection: 'column',
        height: 80,
        justifyContent: 'space-around',
    },

    inputFileLabelMedia: {
        top: 10,
        left: '50%',
        transform: 'translateX(-50%)',
    },

    tabsCircleMedia: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.blue,
        width: '300px',
        marginBottom: typography.marginSmall,
        height: 60,
        borderRadius: typography.borderRadius,
    },
}

export default {
    ...MediaStyleGeneral,
}
