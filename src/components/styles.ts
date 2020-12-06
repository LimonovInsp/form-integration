import typography from "../styles/typography";
import palette from "../styles/palette";
import { Style } from "../types/styleTypes";

const StylesGeneral: Style = {
    inputWrapper: {
        position: 'relative',
        display: "flex",
        flexDirection: 'column',
    },

    input: {
        boxSizing: 'border-box',
        padding: `0 ${typography.paddingMiddle}`,
        outline: 'none',
        backgroundColor: palette.inputBackground,
        color: palette.colorPrimary,
        fontSize: typography.fontSizeMiddle,
        fontFamily: typography.fontFamily,
        lineHeight: typography.lineHeightSemi,
        border: `1px solid ${palette.backgroundDefault}`,
        height: 48,
        borderRadius: typography.borderRadius,
    },

    inputError: {
        border: `1px solid ${palette.error}`,
    },

    inputLabelWrapper: {
        marginBottom: typography.marginSmall,
        fontSize: typography.fontSizeMiddle,
        fontFamily: typography.fontFamily,
    },

    inputLabel: {
        color: palette.labelColor,
        fontWeight: typography.fontWeightSemiBold,
        lineHeight: '100%',
    },

    inputRequiredNotice: {
        color: palette.error,
        marginLeft: typography.marginExtraSmall,
    },

    inputErrorMessage: {
        position: 'absolute',
        bottom: '-20px',
        color: palette.error,
        fontSize: typography.fontSizeSmall,
        lineHeight: typography.fontSizeSmall,
        fontWeight: typography.fontWeight,
        fontFamily: typography.fontFamily,
    },

    formTextArea: {
        resize: 'none',
        outline: 'none',
        border: 'none',
        width: '100%',
        height: 168,
        backgroundColor: palette.inputBackground,
        boxSizing: 'border-box',
        padding: typography.paddingMiddle,
        fontFamily: typography.fontFamily,
        color: palette.colorPrimary,
        fontSize: typography.fontSizeMiddle,
        borderRadius: typography.borderRadius,
    },

    inputFileWrapper: {
      position: 'relative',
    },

    inputFile: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: `0 ${typography.paddingSemiBig}`,
        border: `0.65015px solid rgba(51, 51, 51, 0.2)`,
        borderRadius: typography.borderRadiusMiddle,
        height: 48,
        width: '100%',
        marginTop: typography.marginBig,
    },

    inputFileResolution: {
        visibility: 'hidden',
    },

    inputFileLabel: {
        position: 'absolute',
        left: typography.paddingMiddle,
        display: 'flex',
        outline: 'none',
        alignItems: 'center',
        cursor: "pointer",
    },

    inputFileIcon: {
        marginRight: typography.marginMiddle,
    },

    inputFileDescription: {
        fontSize: typography.fontSize,
        color: palette.grayLight,
        fontWeight: typography.fontWeight,
        fontFamily: typography.fontFamily,
    },

    inputFileCounter: {
        fontWeight: typography.fontWeight,
        lineHeight: typography.lineHeight,
        fontSize: typography.fontSize,
        color: palette.colorPrimary,
    },

    headlineGeneral: {
        fontWeight: typography.fontWeightBold,
        color: palette.backgroundDefault,
        fontSize: typography.fontSizeBig,
        fontFamily: typography.fontFamily,
        lineHeight: typography.lineHeightBig,
        textAlign: 'center',
        marginBottom: 20,
    },

    tabsCircle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.blue,
        width: 30,
        height: 30,
        borderRadius: '50%',
    },

    tabsCircleActive: {
        backgroundColor: palette.cherry,
    },

    tabsCircleContent: {
        color: palette.backgroundDefault,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSizeSemiBig,
        lineHeight: typography.lineHeightBig,
        textDecoration: 'none',
        fontWeight: typography.fontWeightBold,
    },

    tabsContainer: {
        marginBottom: 51,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
}

export default StylesGeneral;
