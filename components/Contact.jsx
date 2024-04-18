import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const parmams=useParams();
  console.log(parmams);
  return (
    <div>Contact</div>
  )
}

export default Contact