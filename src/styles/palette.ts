const paletteColors = {
    gradientBlue: 'linear-gradient(228.75deg, #216190 19.65%, #0834D0 81.25%)',
    white: '#fff',
    grayLight: '#333',
    grayMiddle: '#f9f9f9',
    grayBold: '#636363',
    grape: '#a7a7a7',
    raspberry: '#f15557',
    cherry: '#da3f5b',
    blue: '#1e34a5'
}

export default  {
    backgroundPrimary: paletteColors.gradientBlue,
    backgroundDefault: paletteColors.white,
    inputBackground: paletteColors.grayMiddle,
    colorPrimary: paletteColors.grape,
    labelColor: paletteColors.grayBold,
    error: paletteColors.raspberry,
    ...paletteColors,
}
