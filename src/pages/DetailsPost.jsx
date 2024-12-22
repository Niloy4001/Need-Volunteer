import React from 'react'
import { useLoaderData } from 'react-router-dom'

const DetailsPost = () => {
    const post = useLoaderData()
    console.log(post);
    
  return (
    <div>DetailsPost</div>
  )
}

export default DetailsPost