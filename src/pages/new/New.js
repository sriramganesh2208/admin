import React from 'react'
import './New.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Button } from '@mui/material'
import { DriveFolderUploadOutlined } from '@mui/icons-material'


function New() {
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
          <div className='top'>
            <h1>Add new user</h1>
          </div>
          <div className='bottom'>
            <div className='left'>
              <img src= "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt=''/>
            </div>
            <div className='right'>
              <form>
              <div className='formInput'>
                  <label htmlFor='file'>
                    Image: <DriveFolderUploadOutlined className='icon'/>
                  </label>
                  <input type='file' id='file' style={{display:"none"}}/>
                </div>
                <div className='formInput'>
                  <label>Username</label>
                  <input type='text' placeholder='Sriramganesh22'/>
                </div>
                <div className='formInput'>
                  <label>Name and Surname</label>
                  <input  type='text' placeholder='Sriram ganesh'/>
                </div>
                <div className='formInput'>
                  <label>Email</label>
                  <input type='email' placeholder='Sriramganesh@gmail.com'/>
                </div>
                <div className='formInput'>
                  <label>Phone Number</label>
                  <input type='text' placeholder='9123550061'/>
                </div>
                <div className='formInput'>
                  <label>Password</label>
                  <input type='password' placeholder='......'/>
                </div>
                <div className='formInput'>
                  <label>Address</label>
                  <input type='text' placeholder='west street'/>
                </div>
                <div className='formInput'>
                  <label>Country</label>
                  <input type='text' placeholder='India'/>
                </div>
                <Button>Send</Button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default New