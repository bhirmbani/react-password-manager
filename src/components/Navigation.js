import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navigation = () => (
  <div className="container">
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={'/password-list'}>Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item >
        <Link to={'/add-password'}>Add Password</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
  
)

export default Navigation