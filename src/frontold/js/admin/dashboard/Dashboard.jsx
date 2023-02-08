import React from 'react'
import { Container } from 'react-bootstrap'
import { Sidebar } from '../components/sidebar/Sidebar.jsx'
import { Widget } from '../components/widget/Widget.jsx'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <div className='home d-flex'>
      <Sidebar />
      <Container className='dashContainer'>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </Container>
    </div>
  )
}
