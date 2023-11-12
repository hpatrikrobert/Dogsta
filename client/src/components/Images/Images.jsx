import './Images.css';
import React, { createContext, useState } from "react";
export const movieContext = createContext();
export default function DragDropFile({home, onAdd}) {
  
    const inputRef = React.useRef(null);
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState([]);
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [img, setImg] = useState(null);
    const [likes, setLikes] = useState(0);
    const [funny, setFunny] = useState(0);
    const [fav, setFav] = useState(false);
    const [clicked, setClicked] = useState(false);
    
    function Submit (e){
      if(title === "" || img === "" ) {
        return
      }
      e.preventDefault();
      
      setDate(new Date().toLocaleDateString());
      console.log(date);
      onAdd({title, comment, date, img, likes, funny, fav, clicked})
      
      setTitle('');
      setImg(null);
      setComment([]);
      setLikes(0);
      setFunny(0);
      setFav(false);
      setClicked(false)
    }

    const onButtonClick = () => {
      inputRef.current.click();
    };
    if(home === 3) {
      return
    }
    return (
        <div className='container'>
          <input id="StoryInput"type="text" placeholder='Dog? Dog. Dog!' onChange={(e) => setTitle(e.target.value)}></input>
 <form id="form-file-upload" onSubmit={(e) => e.preventDefault()}>

        <input ref={inputRef} type="file" id="input-file-upload" multiple={false} onChange={() => setImg(URL.createObjectURL(inputRef.current.files[0]))} />
        <label id="label-file-upload" htmlFor="input-file-upload">
        
          <div>
          
            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
          </div> 
        </label>
      </form>
      <button onClick={Submit}>Post</button>
        </div>
     
    );
  };