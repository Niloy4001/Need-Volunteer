import React from 'react'
import MyVolunteerNeedPost from '../components/MyVolunteerNeedPost'
import MyVolunteerRequestPost from '../components/MyVolunteerRequestPost'
import { Helmet } from 'react-helmet'

const ManageMyPost = () => {
  return (
    <div className='w-[90%] mx-auto py-8 md:py-14'>
      <Helmet>
        <title>Manage my post | NEED VOLUNTEER</title>
      </Helmet>
        <MyVolunteerNeedPost></MyVolunteerNeedPost>
        <MyVolunteerRequestPost></MyVolunteerRequestPost>
    </div>
  )
}

export default ManageMyPost