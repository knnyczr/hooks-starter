import React, { useState, useEffect, useRef, createContext } from 'react';
//use state cannot be used in a state component
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

// export const UserContext = createContext(); 

const App = () => {
  const [name, setName]  = useTitleInput('');
  const ref = useRef();
  
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    console.log('fetched dishes')
    const res = await fetch("https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes");
    const data = await res.json();
    setDishes(data)
  };

  useEffect(() => {
    fetchDishes();
  }, []);


  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>level up dish</h1>
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault(); 
        
      }}>
        <input type="text" onChange={(e) => setName(e.target.value) } value={name} />
        <button>Submit</button>
      </form>
      {dishes.map(dish => (
        <article className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc} </p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};


export default App;
