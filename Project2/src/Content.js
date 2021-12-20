import './index.css'

function content() {

    const handleName = () => {
        const names = ["Bob", "Kevin", "James"];
        const randomName = Math.floor(Math.random() * 3);
        return names[randomName];
    }

    const handleClick1 = () => {
        console.log("Button1 is selected");
    }

    const handleClick2 = (button) => {
        console.log(`${button} is selected`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    const handleDoubleClick = () => {
        console.log("DoublecLick");
    }

    return (
        <main >
            <p onDoubleClick={handleDoubleClick}>Hii {handleName()} !!!!</p>
            <button onClick={handleClick1}>Button1</button>
            <button onClick={() => handleClick2("Button2")}>Button2</button>
            <button onClick={(e) => handleClick3(e)}>Button3</button>

        </main>
    )
}

export default content;
