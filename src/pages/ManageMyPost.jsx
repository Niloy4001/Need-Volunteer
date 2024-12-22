import React from 'react'
import MyVolunteerNeedPost from '../components/MyVolunteerNeedPost'
import MyVolunteerRequestPost from '../components/MyVolunteerRequestPost'

const ManageMyPost = () => {
  return (
    <div className='w-[90%] mx-auto py-8 md:py-14'>
        <MyVolunteerNeedPost></MyVolunteerNeedPost>
        <MyVolunteerRequestPost></MyVolunteerRequestPost>
    </div>
  )
}

export default ManageMyPost