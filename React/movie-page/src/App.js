import logo from './logo.svg';
import './App.css';



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

  console.log(movies) //checking that the object is running in the app
  return (
    <div className="App">
      <header className="App-header">
        <h1>Just movies I have seen</h1>
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

        


      </header>
    </div>
  );
}

export default App;
