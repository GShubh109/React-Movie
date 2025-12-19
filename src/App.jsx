import { useState, useEffect } from 'react'
import Search from './Components/Search'
import './App.css'
import mockMovieData from './movies.js';
import Moviecard from './Components/Movie-Card.jsx';

function App() {

      const [searchTerm, setsearchTerm] = useState('');
      const [movies, setMovies] = useState([]);
      const [errorMessage, setErrorMessage] = useState('');
      const [loading, setLoading] = useState(true);
      const fetchMovies = async(query) => {
        try{
            setLoading(true); // Start loading
            await new Promise(resolve => setTimeout(resolve, 700)); // Waits for 700ms
            setMovies(mockMovieData); 
            setLoading(false); // Stop loading
        }
        catch(error){
          console.error(error);
          setErrorMessage('Error fetching movies. Please try after sometime');
          setLoading(false); // Stop loading even on error
        }
      }
      useEffect(()=>{
          fetchMovies();
      },[])


      const filteredMovies = movies.filter(movie => 
        // Filter by title or director (case-insensitive)
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        movie.director.toLowerCase().includes(searchTerm.toLowerCase()));

  return(
  <main>
  <div className = "pattern" />
  <div className = "wrapper">
  <header>
        <img src = "./hero-img.png" alt="Hero Banner" />
  <h1>
    Find <span className ="text-gradient">Movies</span> You’ll Love Without the Hassle
  </h1>
  <Search searchTerm = {searchTerm} setsearchTerm = {setsearchTerm} />
    </header>
    <section className="all-movies">
      <h2>All movies</h2>
      {loading? (
        <p className="text-white"> Loading... </p>
      ): errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ):(
        <ul>
          {filteredMovies.map((movie) => (
          <Moviecard movie={movie}/>
      ))}
        </ul>
      )}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </section>
</div>
</main>
)}

export default App;
