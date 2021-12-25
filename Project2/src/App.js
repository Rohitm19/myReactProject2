import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
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

  const [newItem, setNewItem] = useState('');

  const addNewItem = (newItem) => {  //function to add new item in items array
    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItemObject = { newId, newChecked: false, item: newItem };
    const listItems = [...items, myNewItemObject];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // since we are using an html form tag ... it reloads the page whenever a value is entered. so to prevent the reloading of form we must use e.preventdefault()
    if (!newItem) return  // because we used the required attribute in the input we really should not get a blank value submitted but we can check for it by a condition if newitem is undefined or false they we can return and exit.
    // console.log(newItems);
    addNewItem(newItem);
    setNewItem('');
  }

  const setAndSaveItems = (listItems) => {
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title={"Groceries"} />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleCheck={handleCheck} handleDelete={handleCheck} handleSubmit={handleSubmit} />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
