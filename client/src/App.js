import './App.css';
import Sidenav from './components/Sidenav/Sidenav';
import DragDropFile from './components/Images/Images';
import { useState, useEffect} from 'react';
import Posts from './components/Posts/posts';
import Jokes from './components/Jokes/Jokes'
import Fav from './components/FavoriteList/Fav';
import Rules from './components/Rules/Rules';
import Pop from './components/Popularity/Pop';


function App() {

  const [postList, setPostList] = useState([]);
  const [home, setHome] = useState(0);
  const [somt, setSomt] = useState(1);
  useEffect(() => {

    const url = 'http://localhost:3001/events'

    fetch(url)
      .then(response => response.json())
      .then(posts => {
        setPostList(posts);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  const updatePost = (post) => {
    console.log(post)
    const url = 'http://localhost:3001/updatePost'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: post._id,
        comment: post.comment,
        likes: post.likes,
        funny: post.funny,
        fav: post.fav,
        clicked: post.clicked
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })

  }
  const addPost = async (post) => {
    const url = 'http://localhost:3001/events'
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })

    const data = await res.json()
    setPostList([...postList, data])
    console.log(postList)
  }
  return (
    <div className="App">
      <div id='Sidenav'>
        <Sidenav setHome={setHome} /> 
      </div>
      <div id='Dragdrop'>
          <DragDropFile home={home} onAdd={addPost}/>
          <Posts setSomt={setSomt} home={home} list={postList}updatePost={updatePost}/>
          <Jokes setSomt={setSomt} home={home} list={postList}updatePost={updatePost}/>
          <Fav setSomt={setSomt} home={home} list={postList}updatePost={updatePost}/>
          <Rules home={home} />
              </div>
      <div>
        <Pop list={postList}/>
      </div>
      
    </div>
  );
}

export default App;
