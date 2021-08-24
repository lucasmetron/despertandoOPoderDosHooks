import React, { useEffect, useState } from 'react';

export default function useOnScreen(ref, rootMArgin = '0px') {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
        }, {
            rootMArgin,
        })

        if (element) {
            observer.observe(element)
        }

        return () => {
            observer.unobserve(element)
        }

    }, [ref, rootMArgin])

    return isVisible;
}