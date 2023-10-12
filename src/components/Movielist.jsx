import React, { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import getMovieRequest from '../movies';
import Filter from './Filter'; 

const Movielist = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovieRequest();
        setMovies(moviesData);
        setFilteredMovies(moviesData); // Initially, set filteredMovies to all movies
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredList = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filteredList);
  };

  return (
    <>
    <div className='input-box'>
    <Filter onSearch={handleSearch} />
    </div>
      
      <br /><br />
      <div className='movie-box'>
      {filteredMovies.map((movie) => (
        <Moviecard key={movie.imdbID} movie={movie} />
      ))}
      </div>
      
    </>
  );
};

export default Movielist;