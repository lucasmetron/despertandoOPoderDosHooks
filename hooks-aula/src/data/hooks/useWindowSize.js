import { useEffect, useState } from "react"

function getWindowsSize() {
    return {
        width: window.innerWidth,
        heigth: window.innerHeight
    }
}

export default function useWindowSize() {

    const [size, setSize] = useState(getWindowsSize());

    function updateSize() {
        setSize(getWindowsSize())
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize)

        return () => {
            window.removeEventListener('resize', updateSize)
        }
    }, [])

    return size;
}