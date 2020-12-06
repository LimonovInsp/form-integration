import typography from "../../styles/typography";
import palette from "../../styles/palette";
import { Style } from "../../types/styleTypes";

const LayoutStyles: Style = {
    layout: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100%',
        padding: 20,
        background: palette.backgroundPrimary,
        fontFamily: typography.fontFamily,
    }
}

export default {
    ...LayoutStyles,
}
