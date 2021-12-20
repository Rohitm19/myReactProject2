import './index.css'
import { useState } from 'react';

function Content() {
    const [name, setName] = useState();
    const [count, setCount] = useState(0);

    const handleName = () => {
        const names = ["Bob", "Kevin", "James"];
        const randomName = Math.floor(Math.random() * 3);
        setName(names[randomName]);
    }

    const handleClick1 = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }

    const handleClick2 = (button) => {
        console.log(count)
    }

    const handleDoubleClick = () => {
        console.log("DoublecLick");
    }

    return (
        <main >
            <p onDoubleClick={handleDoubleClick}>Hii {name} !!!!</p>
            <button onClick={handleName}>Change my name</button> 
            <button onClick={handleClick1}>Click it</button><h1>{count}</h1>
            <button onClick={handleClick2}>Click it</button>

        </main>
    )
}

export default Content;
