// Moviepage.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Card} from 'react-bootstrap'

const Moviepage = () => {
    const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
    return null; // Render nothing if movie data is not available
  }
  return (
    <>
      <div>
        <Card>
      <Card.Header as="h1">Description</Card.Header>
      <Card.Body>
        <Card.Title>Type: {movie.Type}</Card.Title>
        <Card.Text>
        Year: {movie.Year}
        </Card.Text>
        <Link to="/">Back</Link>
      </Card.Body>
    </Card>
      </div>
    </>
  );
};

export default Moviepage;