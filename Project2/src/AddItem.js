import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleCheck, handleSubmit, handleDelete }) => {
    return (
        <form className='addForm' onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='addItem'> Add Item </label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder="Add Item"
                required //The required attribute is a boolean attribute. When present, it specifies that an input field must be filled out before submitting the form.
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type='submit' aria-label="Add Item" >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem;
