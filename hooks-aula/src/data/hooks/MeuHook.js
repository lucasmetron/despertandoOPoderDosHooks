import React, { useState } from 'react';

export default function useMeuHook() {
    const [a, setA] = useState(0);

    return a;
}

function Componente() {
    const b = useMeuHook();
}