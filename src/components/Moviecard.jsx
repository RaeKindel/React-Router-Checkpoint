// Moviecard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Moviecard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Desc', { state: { movie } });
  };

  return (
    <>
      <Card style={{ width: '18rem' }} onClick={handleClick}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Moviecard;