import React, {useState} from 'react';
import './App.css';

function Counter()
{
    let [count, setCount] = useState(0);
    return(
        <div>
            <div className="counterText">{count}</div>
            <br/><br/>
            <button className="counterButton" onClick={()=>setCount(--count)}>-</button>
            <button className="counterButton" onClick={()=>setCount(++count)}>+</button>
            <br/><br/>
            <button className="counteReset" onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;