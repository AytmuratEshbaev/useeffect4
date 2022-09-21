import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        let val = count + +e.target.value;
        if (val > 0) setCount(val);
        else setCount(0);
    }

    const reset = () => {
        setCount(0);
    }
    return (
        <div className='wrapper'>
            <p className='display'>{count}</p>
            <div className='btn__group'>
                <button value={-1} onClick={handleClick}>-1</button>
                <button value={1} onClick={handleClick}>+1</button>
            </div>
            <button className='resetBtn' onClick={reset}>Reset</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);

