import { useEffect, useState } from "react"

export function getWindowSize(){
    const [windowSize,setwindowSize]=useState({width: window.innerWidth,height: window.innerHeight})

  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setwindowSize({width: window.innerWidth,height: window.innerHeight})
    })
    
  },[])

  return windowSize
}