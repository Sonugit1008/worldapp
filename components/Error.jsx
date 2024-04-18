import React from 'react'
import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
  console.error(error);
  return (
    <div>Something went wrong {error.status}</div>
  )
}

export default Error