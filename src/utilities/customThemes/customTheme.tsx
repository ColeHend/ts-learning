import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import dark from './themes/dark';
import light from './themes/light';

function getTheme(theme: "dark" | "light" | string) {
    switch (theme) {
        case "dark":
            return dark;
        case "light":
            return light;
        default:
            return dark;
    }
}
export default function CustomTheme(props: PropsWithChildren<{ theme?: string }>) {
    const theTheme = createTheme(getTheme(props.theme ?? "dark"));
    return (
            <ThemeProvider theme={theTheme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
    )
}
