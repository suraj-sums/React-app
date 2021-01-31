import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container text-center p-4">
    <h1 style={{ fontSize: 85, fontStyle: 'italic', marginBottom: 0 }}>404</h1>
    <h4 style={{ marginBottom: 20 }}>The requested page could not be found!</h4>
    <Link to="/" className="btn btn-primary">
      Back to Home
    </Link>
  </div>
);

export default NotFound;
