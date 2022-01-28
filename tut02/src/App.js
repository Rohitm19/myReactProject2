import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState([{
    id: 1,
    title: "My 1st Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My 4th Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }]);

  const [search, setSearch] = useState(''); // use '' when you know search is going to be a string.
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const history = useHistory();

  const handleDelete = (id) => {
    const postLists = posts.filter((post => post.id !== id))
    setPosts(postLists);
    history.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime: dateTime, body: postBody };
    const completePosts = [...posts, newPost];
    setPosts(completePosts);
    setPostTitle('');
    setPostBody('');
    history.push('/');
  }

  useEffect(() => {
    const filteredResult = posts.filter((post) => (
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())))
    setSearchResult(filteredResult.reverse());

  }, [posts, search]);

  return (
    <div className="App">
      <Header title={"React Blogs..."} />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path='/'>
          <Home posts={searchResult} />
        </Route>
        <Route exact path='/post'>
          <NewPost
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            handleSubmit={handleSubmit}
          />
        </Route>
        <Route exact path='/post/:id'>
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
