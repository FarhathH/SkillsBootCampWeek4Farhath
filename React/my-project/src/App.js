import logo from './logo.svg';
import './App.css';

//This is just for displaying my heading 
function MyHeading({heading,type}){ //parameter for function
  // let heading = "Ⓦⓗⓨ？"
  
  
  //check the condition to effect which heading is displayed.
  if(heading === "Ⓦⓗⓨ？" && type == 1){
    return( 
      <h1> that's some nice {heading}</h1>
    );
  }
  else if(heading === "two" && type == 2){
    return(
      <h2>Let's get some {heading}</h2>
    );
  }
  else if(heading === "Penni the dancing Cholo" && type == 3){
    return(
      <h3>Wanna see my {heading}?</h3>
    );
  }
  else if(heading === "=͟͟͞͞ =͟͟͞͞ ﾍ ( ´ Д `)ﾉ" && type == 6){
    return(
      <h6>How could this happen to {heading}?</h6>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
        <MyHeading //calls function with different response and font type
          heading = {"Ⓦⓗⓨ？"} 
          type = {1}
        /> 
        <p>
          (•ө•)♡ ɿ(｡･ɜ･)ɾ Ⓦⓗⓨ？ ɿ(｡･ɜ･)ɾ Ⓦⓗⓐⓣ？(•ө•)♡ ✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩
        </p>
        <MyHeading //calls function with different response and font type
          heading = {"two"} 
          type = {2}
        />

        <p>
          (•ө•)♡ ɿ(｡･ɜ･)ɾ Ⓦⓗⓨ？ ɿ(｡･ɜ･)ɾ Ⓦⓗⓐⓣ？(•ө•)♡ ✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩
        </p>
        <MyHeading //calls function with different response and font type
          heading = {"Penni the dancing Cholo"}
          type = {3}
        />

        <p>
          (•ө•)♡ ɿ(｡･ɜ･)ɾ Ⓦⓗⓨ？ ɿ(｡･ɜ･)ɾ Ⓦⓗⓐⓣ？(•ө•)♡ ✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩
        </p>
        <MyHeading //calls function with different response and font type
          heading = {"=͟͟͞͞ =͟͟͞͞ ﾍ ( ´ Д `)ﾉ"}
          type = {6}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
