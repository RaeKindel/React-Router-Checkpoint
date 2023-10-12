const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=marvel&apikey=9df8b3a3`;
  
    const response = await fetch(url);
    const responseJson = await response.json();
  
    if (responseJson.Search) {
      return responseJson.Search;
    } else {
      throw new Error('Response does not contain movies');
    }
  };
  
  export default getMovieRequest;