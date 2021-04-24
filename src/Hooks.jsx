import React, { useState, useEffect, createContext, useContext } from 'react';


const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
const mycontext=createContext(themes);

const Hooks = () =>{

    // updating state using useState
    const [ age, setAge ] = useState(19);
    const handleAgeValue = () => setAge(age + 1);

    // multiple state
    const [ age1, setAge1 ] = useState(12);
    const [ siblingsNum, setSiblingsNum ] = useState(2);
    const handleAge = () => setAge1(age1+1);
    const handleSiblingsNum = () => setSiblingsNum(siblingsNum+1);

    // object state
    const [detail, setDetail] = useState({ age2: 19, siblingsNum1: 4})
    const handleClick = val =>
    setDetail({
      ...detail, [val]: detail[val]+1
    })
    const {age2, siblingsNum1} = detail

    // Initialize state from function
    const [ count, setCount ] = useState(0);

    // changing title of current browser using useEffect
    const[age3, setAge2] = useState(0)
    const ChangeTitle = () => setAge2(age3+1)
     useEffect(()=> {
    document.title = `You are ${age3} years old!`
    })

    //geting the context created using useContext
    const theme=useContext(mycontext);         
    const[style,setStyle]=useState('light')
    const changeColor=()=>{      //this function is to set color that we used in context 
        setStyle(style==='light'?'dark':'light')
    }

    return(
        <div className="main">
            
        <div className="section1">
        <h1>Update State using useState</h1>
           <h3> Today I am <strong style={{ color: "red" }}>{age}</strong> Years of Age </h3>
            <div>
            <button onClick={handleAgeValue}>Get older!</button>
            </div>
        </div>

        <div className="section2">
        <h1>Multiple State</h1>
           <h3> Today I am <strong style={{ color: "red" }}>{age1}</strong> Years of Age </h3>
           <h3>I have <strong style={{ color: "red" }}>{siblingsNum}</strong> siblings </h3>
            <div>
            <button onClick={handleAge}>Get older!</button> 
            <button onClick={handleSiblingsNum}>More siblings!</button>
            </div>
        </div>

        <div className="section3">
        <h1>Using Object State</h1>
           <h3> Today I am <strong style={{ color: "red" }}>{age2}</strong> Years of Age </h3>
           <h3>I have <strong style={{ color: "red" }}>{siblingsNum1}</strong> siblings </h3>
            <div>
            <button onClick={handleClick.bind(null, 'age2')}>Get older!</button> 
            <button onClick={handleClick.bind(null, 'siblingsNum1')}>More siblings!</button>
            </div>
        </div>

        <div className="section4">
        <h1>Initializing State from Function</h1>
           <h3> Count value is: <strong style={{ color: "red" }}>{count}</strong></h3>
           <div>
            <button onClick={() => setCount(0)}>Reset</button> 
            <button onClick={() => setCount(nextCount=>nextCount-1)}>Minus (-)</button>
            <button onClick={() => setCount(prevCount=>prevCount+1)}>Plus (+)</button>
            </div>
        </div>

        <div className="section5">
        <h1>UseEffect</h1>
           <h3> Look at the title of the current tab in your browser </h3>
            <div>
            <button onClick={ChangeTitle}>Update Title!</button>
            </div>
        </div>

       <div className="section6">
        <h1>UseContext</h1>
           <h3 style={{background:theme[style].background,color:theme[style].foreground}}>Theme</h3>
           <button onClick={changeColor}>Change Style</button>
           </div>

        </div>
    )
}

export default Hooks