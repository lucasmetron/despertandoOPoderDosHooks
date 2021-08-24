import { useEffect, useRef } from "react";

export default function useUndo(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current;
}

//o useEffect só executado depois do return, ou seja, sempre teremos o valor anterior 