import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const isRoot = (pathname, root) => {
    const takeLast = pathname.split('/')[2];
    const path = takeLast && takeLast.match(/[0-9]/g);
    // debugger;
    if (path) {
        return !!(path.length > 0);
    } else if (takeLast === root && !path) {
        return false;
    }
};

function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || "xs"
    );
}

export {
    isRoot,
    useWidth
}