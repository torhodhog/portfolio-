import React, {useState, useEffect} from 'react'

const useScrollProgress = () => {
   const [completion, setCompletion] = useState(0);

   useEffect(() => {
      const updateScrollCpmpletion = () => {
         const currentProgress = window.scrollY;
         const scrollHeight = document.body.scrollHeight - window.innerHeight;

         if(scrollHeight){
            setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
         }
      };

      // Add event listener to window

      window.addEventListener('scroll', updateScrollCpmpletion);
      // Remove event listener on cleanup
      return () => window.removeEventListener('scroll', updateScrollCpmpletion);
   }, [])


  return (
   completion
  )
}

export default useScrollProgress
