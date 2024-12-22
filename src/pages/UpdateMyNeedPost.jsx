import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateMyNeedPost = () => {
    const post = useLoaderData()
    console.log(post);
    
  return (
    <div>UpdateMyNeedPost</div>
  )
}

export default UpdateMyNeedPost