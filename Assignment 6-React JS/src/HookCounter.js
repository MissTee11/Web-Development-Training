import React, {useState,useEffect } from 'react'

export function HookCounter()
{
    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick={() => {if(count>0) {setCount(count - 1)}}}>Minus</button>
            <span id="textCount">Count {count}</span>
            <button onClick={() => setCount(count + 1)}>Plus</button>
        </div>
    )
    
}
export default HookCounter