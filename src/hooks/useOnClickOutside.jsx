import { useEffect } from 'react'; 
//usehooks.com

function useOnClickOutside(ref, handler) {
 useEffect(() => {
    const listener = e => {
        if (!ref.current || ref.current.contains(e.target)){
            return; 
            // console.log(ref.current);
        }
        handler();
    }

    document.addEventListener('touchstart', listener)
    document.addEventListener('mousedown', listener)
    
    return () => {
        document.removeEventListener('touchstart', listener)
        document.removeEventListener('mousedown', listener)
    }

 }, [])
}

export { useOnClickOutside }