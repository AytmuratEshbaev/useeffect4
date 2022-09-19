import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ClickedBtn() {
    const [items, setItems] = useState([0, 1]);
    const [hoverItem, setHoverItem] = useState('none')
    const addBtn = () => {
        setItems(items => [...items, items.length]);
    }
    const hovered = (e) => {
        setHoverItem(e.target.childNodes[1].textContent)
    }
    const notHover = () => {
        setHoverItem('none');
    }
    return (
        <div className='wrapper'>
            <button onClick={addBtn}>Add</button>
            <p>Clicked button number: <span>{hoverItem}</span> </p>
            <ul>
                {items.map((item, index) =>
                    <li key={index} onMouseOver={hovered} onMouseLeave={notHover}>Item <span>{item}</span></li>
                )}
            </ul>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ClickedBtn />
    </React.StrictMode>
);


