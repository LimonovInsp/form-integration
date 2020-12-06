import typography from "../../styles/typography";
import palette from "../../styles/palette";
import { Style } from "../../types/styleTypes";

const FormStyles: Style = {
    formWrapper: {
        maxWidth: 628,
        height: 727,
        borderRadius: typography.borderRadius,
        backgroundColor: palette.backgroundDefault,
        boxSizing: 'border-box',
        padding: typography.paddingBig,
    },

    formInputsGroup: {
        display: 'flex',
        marginBottom: typography.marginBig,
    },

    button: {
        width: 144,
        height: 56,
        outline: 'none',
        border: 'none',
        backgroundColor: palette.cherry,
        color: palette.backgroundDefault,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSizeMiddle,
        lineHeight: typography.lineHeightMiddle,
        borderRadius: typography.borderRadius,
        fontWeight: typography.fontWeightBold,
        marginTop: typography.marginBig,
        cursor: 'pointer',
    }
}

export default {
    ...FormStyles
}
