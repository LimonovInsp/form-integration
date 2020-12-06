interface Typography {
    fontSizeSmall: string;
    fontSize: string;
    fontSizeMiddle: string;
    fontSizeSemiBig: string;
    fontSizeBig: string;

    fontFamily: string;

    marginExtraSmall: string;
    marginSmall: string;
    marginMiddle: string;
    marginBig: string;

    lineHeightSmall: string;
    lineHeight: string;
    lineHeightSemi: string
    lineHeightMiddle: string;
    lineHeightBig: string;

    fontWeight: number;
    fontWeightSemiBold: number;
    fontWeightBold: number;

    paddingMiddle: string;
    paddingSemiBig: string;
    paddingBig: string;

    borderRadius: string;
    borderRadiusMiddle: string;
}

const typography: Typography = {
    fontSizeSmall: '12px',
    fontSize: '14px',
    fontSizeMiddle: '16px',
    fontSizeSemiBig: '18px',
    fontSizeBig: '40px',
    marginExtraSmall: '4px',
    marginSmall: '8px',
    marginMiddle: '16px',
    marginBig: '40px',
    lineHeightSmall: '12px',
    lineHeight: '14px',
    lineHeightSemi: '16px',
    lineHeightMiddle: '22px',
    lineHeightBig: '64px',
    fontWeight: 400,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    paddingMiddle: '16px',
    paddingSemiBig: '24px',
    paddingBig: '56px',
    fontFamily: `Open Sans, sans-serif`,
    borderRadius: '8px',
    borderRadiusMiddle: '10px',
}

export default {
 ...typography
}
