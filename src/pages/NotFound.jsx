import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Heading from "../components/Heading/Heading"


export const NotFound = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    useEffect(() => {
      if(count === 0){
        navigate("/")
        return
      }
    const idInterval = setInterval(()=>{
        setCount(prev=> prev -1)
    },1000)
      return () => {
        clearInterval(idInterval)
      }
    }, [count, navigate])
    
  return (
    <>
    
    
    <Heading title={`Oops! We dont found page. You be redirect to Home. ${count}`} top/>
    </>
  )
}
