import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'


// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);


const theme = responsiveFontSizes(
    createMuiTheme({
        myPalette: {
            accent: '#0060FF',
            black: '#14151A',
            green: '#60D184',
            yellow: '#F7AE15',
            red: '#E95A40',
        },
        palette: {
            white: "#FFFFFF",
            orange: {
                main: "#FFB64F",
                dark: "#FF4500"
            },
            green: {
                main: "#25A29B",
                dark: "#013220"
            }
        },
        typography: {
            fontFamily: ['"Segoe UI Emoji"', 'Roboto'].join(","),
            h3: {
                fontSize: "10px"
            },
            // fontFamily: 'Roboto'
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 768,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    })
)

// theme.typography.h4 = {
//     fontSize: '1.3rem',
//     fontFamily: ['"Segoe UI Emoji"', 'Roboto'].join(","),
//     '@media (min-width:600px)': {
//         fontSize: '1.3rem',
//     },
//     [theme.breakpoints.up('md')]: {
//         fontSize: '1.3rem',
//     },
// };
export default theme;