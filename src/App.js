import React, { useState, useEffect, useRef, createContext } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';
import useAbortableFetch from 'use-abortable-fetch'; // this is a 3rd party hook!
import { useSpring, animated } from 'react-spring'; 

https://nikgraf.github.io/react-hooks/
https://github.com/rehooks/awesome-react-hooks
https://usehooks.com/


const App = () => {
  const [name, setName]  = useTitleInput('');
  const ref = useRef();
  
  const { data, loading } = useAbortableFetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');

  const props = useSpring({ opacity:1, from: {opacity: 0} })
  console.log('props:', props)

  return (
    <div className="main-wrapper" ref={ref}>
      <animated.h1 style={props} onClick={() => ref.current.classList.add('new-fake-class')}>level up dish</animated.h1>
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault(); 
        
      }}>
        <input type="text" onChange={(e) => setName(e.target.value) } value={name} />
        <button>Submit</button>
      </form>
      {data && 
        data.map(dish => (
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
