import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));   /// here you can load the local storage content by parsing the json and using get
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');


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
    localStorage.setItem('shoppingList', JSON.stringify(listItems));  // you can store ypur data in local storage by stringfying the json data and set it to a name called shoppingList
  }

  return (
    <div className="App">
      <Header title={"Groceries"} />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleCheck={handleCheck} handleDelete={handleCheck} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}


export default App;
