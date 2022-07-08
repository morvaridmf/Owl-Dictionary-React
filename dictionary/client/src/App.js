import './App.css';
import React, { useState, useEffect } from "react";
import Card from './Components/Card'
import Error from './Components/Error';


function App() {

  const [translation , setTranslation] = useState ('')
  const [search, setSearch] = useState ('');

  const handleSubmit = e => {
    
    e.preventDefault();
    fetch(`http://localhost:5000/search/${search}`)
    .then(res => res.json())
    .then(data =>{ setTranslation(data.definitions[0])
      //  console.log(translation);
    })
    
    setSearch('')
  }

  useEffect (()=>{
  
  },[])


  return (
    <div className="app">
      <h1>Dictionary</h1>
      <form onSubmit={handleSubmit}>
            <input type="text" value={search} 
            className="form__input" name='search' 
            placeholder='Type your word'
            onChange={(e)=> setSearch(e.target.value)}/>
            <button type='submit' className='form__btn' >Enter</button>
        </form>

    {
      translation ?
      <Card image={translation.image_url}
       type={translation.type} 
       emoji ={translation.emoji}
       definition={translation.definition}
       example={translation.example}/>
       
       : <Error/>
      }
      
    </div>
  );
}

export default App;
