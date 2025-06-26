import React from 'react'
import { useRouteError } from 'react-router'

const ShowError = () => {

    const error = useRouteError();
  return (
    <div className='h-screen w-screen justify-center items-center'>
        {JSON.stringify(error)}
        
    </div>
  )
}

export default ShowError