import React, { useContext } from 'react';
import { themes, ThemeContext } from '../data/ThemeProvider';

// export default function Teste() {

//     return (
//         <ThemeContext.Consumer>
//             {(theme) => {
//                 return (
//                     <h1 onClick={theme.toggle}>{theme.value}</h1>
//                 );
//             }}
//         </ThemeContext.Consumer>
//     );
// }


export default function Teste() {

    const theme = useContext(ThemeContext);


    return (
        <h1 onClick={theme.toggle}>{theme.value}</h1>
    );
}