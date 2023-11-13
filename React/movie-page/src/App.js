import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; //useState function imported to be used



let movies = { //Created an object with values.
  first:{
    info:{
      title: "Inception",
      director:"Christopher Nolan",
      actor:"Leonardo DiCaprio"

    },
    poster: "images/movie-poster.jpg"
  },

  second:{
    info:{
      title:"Kill Bill: Volume 1",
      director:"Quentin Taratino",
      actor: "Uma Thurman"
    },
    poster:"images/kill-bill-volume-1.jpg"
  },

  third:{
    info:{
      title:"Scream",
      director:"Wes Craven",
      actor:"Neve Campbell"
    },
    poster:"images/scream.jpg"
  }

   
}

function MovieDisplay({posterInfo}){
  return( //calling the object using the syntax
    <>
      <h2>{posterInfo.info.title}</h2>
      <p>Director: {posterInfo.info.director}</p>
      <p>Starring: {posterInfo.info.actor}</p>
      <img src = {posterInfo.poster}></img>
    </>
  );
}

function App() {

  const [count, setCount] = useState(0); //initlaising useState function to be used
  console.log(movies) //checking that the object is running in the app

  function AddOne(){
    setCount(count + 1) //setting the increment
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Just movies I have seen</h1>
        <button
          onClick = {AddOne} //trigger increment through a mouse click
        >{count}</button> 
        {/* <MovieDisplay //displaying the info of objects using the function
          posterInfo = {movies.first}
        />
        <p>--------------------------------------------------------------------------</p>
        <MovieDisplay //displaying the info of objects using the function
          posterInfo = {movies.second}
        />
        <p>--------------------------------------------------------------------------</p>
        <MovieDisplay //displaying the info of objects using the function
          posterInfo = {movies.third}
        /> */}

        {Object.values(movies).map(movie =>{
              //used map function to view all the objects as an array
              return(
                <>
                  <h2 >Title: {movie.info.title}</h2>
                  <div class = "info">
                  <p>Director: {movie.info.director}</p>
                  <p> Starring: {movie.info.actor}</p>
                  <img src = {movie.poster} className = "imgStyle"></img>
                  </div>
                </>
              );
          })
        
        }


      </header>
    </div>
  );
}

export default App;
