import logo from './logo.svg';
import './App.css';

//This is just for displaying my heading 
function MyHeading({heading,type}){ //parameter for function
  // let heading = "Ⓦⓗⓨ？"
  
  
  //check the condition to effect which heading is displayed.
  //header parameter is a placeholder for new text
  if(type == 1){
    return( 
      <h1> that's some nice {heading}</h1>
    );
  }
  else if(type == 2){
    return(
      <h2>Let's get some {heading}</h2>
    );
  }
  else if(type == 3){
    return(
      <h3>Wanna see my {heading}?</h3>
    );
  }
  else if(type == 6){
    return(
      <h6>How could this happen to {heading}?</h6>
    );
  }
}

let siteMapData = {
  heading:"Tarantulas4U",
  url:"https://worldoftarantula.com/en-gb"
}; //Object

let siteMapData2 = [
  "I will end you",
  "Get wreaked",
  "Whacha want Tom? I can't hear ya Tom"
]; //Array

function ArrayTime({element}){ //function and parameter 
  
  //console.log({element})
  //for(let index = 0; index < element.length; index++){
   
      return(
        element.map((item) =>{ //map function/syntax that prints all indexes in the array
          console.log(item)
            return(
              <p>
                {item}
              </p>
            )
          
        })
      ) 
  }
  
  



function SiteMapBox({data}){ //function for sitemap
  
  console.log(data) //should print in the console
  return(//using dot specifier to call the objects
    <>
    <strong>{data.heading}</strong> 
    <a  href = {data.url}
        target = "_blank"> 
          
        <h1>˚₊𓆩༺🕷༻𓆪₊˚</h1>
    </a>
    </>
  );
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <ArrayTime
        element = {siteMapData2}
      />

        <SiteMapBox //called the function
          data = {siteMapData}
          
        />
        
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
