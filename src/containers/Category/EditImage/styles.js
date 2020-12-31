export const styles = (theme) => ({
    cropContainer: {
        position: 'relative',
        width: '100%',
        height: 200,
        background: '#333',
        [theme.breakpoints.up('sm')]: {
            height: 400,
        },
    },
    cropButton: {
        flexShrink: 0,
        marginLeft: 16,
    },
    controls: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'stretch',
        // width: '100%',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',

            alignItems: 'center',
            padding: 16,
        },
    },
    sliderContainer: {
        width: '100%',
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        margin: '0 auto',
    },
    sliderLabel: {
        [theme.breakpoints.down('xs')]: {
            minWidth: 65,
        },
    },
    slider: {
        padding: '22px 0px',
        marginLeft: 16,
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 16px',
        },
    },
    margin: {
        margin: theme.spacing(0, 1),
    },
})
