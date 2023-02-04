import "./Sidebar.css"
import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'



export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Icons Admin</span>
        </div>
        <div className='center'>
          <ListGroup>
          <p className='title'>Principal</p>
            <ListGroupItem className=""><span>Users</span></ListGroupItem>
            <ListGroupItem ><span>Artists</span></ListGroupItem>
            <ListGroupItem ><span>Booking</span></ListGroupItem>
            <p className='title'>Usuario</p>
            <ListGroupItem ><span>Profile</span></ListGroupItem>
            <ListGroupItem ><span>Logout</span></ListGroupItem>
          </ListGroup>
        </div>
        <div className='bottom'>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}
