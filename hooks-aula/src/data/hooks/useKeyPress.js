import React, { useEffect, useState } from 'react';

export default function useKeyPress(targetKey) {
    const [isPressed, setPressed] = useState(false);

    function up(event) {
        if (event.key === targetKey) {
            setPressed(false)
        }
    }

    function down(event) {
        if (event.key === targetKey) {
            setPressed(true)
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', up)
        window.addEventListener('keydown', down)

        return () => {
            window.removeEventListener('keyup', up)
            window.removeEventListener('keydown', down)
        }
    }, [])

    return isPressed;
}