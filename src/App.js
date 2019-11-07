import React, { useState, useEffect, useRef, createContext, useMemo } from 'react';
//use state cannot be used in a state component
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';
import Counter from './Counter'

export const UserContext = createContext(); 

const App = () => {
  const [name, setName]  = useTitleInput('');
  const ref = useRef();

  // almost like should a component update? 
  const reverseWord = wrd => {
    console.log('function called')
    return wrd.split("").reverse().join("");

  }
  const title = "Level Up Dishes"
  const TitleReversed = useMemo(() => reverseWord(title), [title]) 
  // almost like a should a component update? 

  return (
    <UserContext.Provider
      value={{
        user: false
      }}
    >

    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>{TitleReversed}</h1>
      <Toggle />
      {/* <Counter /> */}
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
