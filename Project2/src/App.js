import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);   /// here you can load the local storage content by parsing the json and using getItem. || [] is condition to show empty data if the component is loaded for the first time with no data available in local storage.
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!(response.ok)) throw Error("Did not receive expected data.")
        const listItems = await response.json();
        setItems(listItems);
        setfetchError(null);
      }
      catch (err) {
        setfetchError(err.message);
      }
      finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchItems();
    }, 2000)  // using setTimeout to simulate the loading time (if the api response is slow or not).

    // (async () => { await fetchItems() })(); // IIFE (instantly invoked function expression)
  }, []);

  const addNewItem = (newItem) => {  // function to add new item in items array
    const newId = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItemObject = { id: newId, checked: false, item: newItem };
    const listItems = [...items, myNewItemObject];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // since we are using an html form tag ... it reloads the page whenever a value is entered. so to prevent the reloading of form we must use e.preventdefault()
    if (!newItem) return  // because we used the required attribute in the input we really should not get a blank value submitted but we can check for it by a condition if newitem is undefined or false. if it is undefined or false then we can return and exit the function; since no value is enterred and submitted.
    // console.log(newItems);
    setNewItem('');
    addNewItem(newItem);
  }

  return (
    <div className="App">
      <Header title={"Groceries"} />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleCheck={handleCheck} handleDelete={handleCheck} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading items....</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
          <Content items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
