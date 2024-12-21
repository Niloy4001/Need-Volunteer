import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const VolunteerNeedsNow = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/needVolunteerPost')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className='text-center'>Volunteer Needs Now</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            {
                posts.length > 0 ? 
                posts.map(post => 
                    <div key={post._id} className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
                    <img className="w-full h-48 object-cover" src={post.thumbnail} alt={post.postTitle} />
                    <div className="px-6 py-4">
                      <h3 className="text-xl font-bold text-gray-800">{post.postTitle}</h3>
                      <p className="text-sm text-gray-600 mt-2">Category: <span className="font-semibold">{post.category}</span></p>
                      <p className="text-sm text-gray-600 mt-2">Deadline: <span className="font-semibold">{post.deadline}</span></p>
                    </div>
                    <div className="px-6 py-4">
                      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                )
                :
                <div><span className="loading loading-ring loading-lg"></span></div>
            }
        </div>
        <div>
            <Link to={"/allPost"} className='btn'><button>See All</button></Link>
        </div>
    </div>
  )
}

export default VolunteerNeedsNow