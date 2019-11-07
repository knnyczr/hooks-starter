import React, { useState, useEffect, useRef, createContext } from 'react';
//use state cannot be used in a state component
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext(); 

const App = () => {
  const [name, setName]  = useTitleInput('');
  const ref = useRef();


  return (
    <UserContext.Provider
      value={{
        user: false
      }}
    >

    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>level up dish</h1>
      <Toggle />
      <form onSubmit={(e) => {
        e.preventDefault(); 
        
      }}>
        <input type="text" onChange={(e) => setName(e.target.value) } value={name} />
        <button>Submit</button>
      </form>
    </div>
      </UserContext.Provider>
  );
};


export default App;
