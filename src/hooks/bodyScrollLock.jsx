import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden';
        
        // return function cleanup() {
        //this can be named whatever you want; the docs for the most part will be cleanup OR
        return () => {
            document.body.style.overflow = originalOverflow;
        }
    }, [])
}

export { useBodyScrollLock }