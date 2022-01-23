import './index.css'
import ItemList from './ItemList'

function Content({ items, handleCheck, handleDelete }) {

    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (<p style={{ marginTop: '2rem' }}>No items in your cart</p>)
            }
        </>
    )
}

export default Content;
