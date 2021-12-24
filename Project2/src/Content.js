import './index.css'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

function Content() {
    const [items, setItems] = useState([
        {
            id: "0",
            checked: false,
            item: "Coke"
        },
        {
            id: "1",
            checked: false,
            item: "Pepsi"
        },
        {
            id: "2",
            checked: false,
            item: "Mountian Dew"
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {
            ...item,
            checked: !item.checked
        } : item);
        setItems(listItems);
        localStorage.setItems('shoppingList', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItems('shoppingList', JSON.stringify(listItems));
    }

    return (
        <main >
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
                            <label style={item.checked ? { textDecoration: 'line-through' } : null} onDoubleClick={() => handleCheck(item.id)}> {item.item}</label>
                            <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex={0} />
                        </li>
                    ))}
                </ul>
            ) : (<p style={{ marginTop: '2rem' }}>No items in your cart</p>)
            }
        </main>
    )
}

export default Content;
