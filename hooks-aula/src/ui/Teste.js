import React, { useContext } from 'react';
import { themes, ThemeContext } from '../data/ThemeProvider';

export default function Teste() {

    const theme = useContext(ThemeContext);


    return (
        <h1 onClick={theme.toggle}>{theme.value}</h1>
    );
}