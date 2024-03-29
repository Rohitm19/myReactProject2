import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    // handleSubmit is activated once you provide a value in input and press enter key or click the button.
    return (
        <form className='addForm' onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='addItem'> Add Item </label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder="Add Item"
                required //The required attribute is a boolean attribute. When present, it specifies that an input field must be filled out before submitting the form.
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
            />
            <button type='submit' aria-label="Add Item" onClick={() => inputRef.current.focus()}>
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem;
