import './Jokes.css'
import likelogo from '../logos/thumbs-up.png'
import favlogo from '../logos/pawprint.png'
import commentlogo from '../logos/bark.png'
import funnylogo from '../logos/laughing.png'
import React, { useState } from 'react'

export default function Jokes ({setSomt, home, list, updatePost}) {
    const [txt, setTxt] = useState("");
    const [kell, setKell] = useState(null);
if(home !== 1) {
    return
}
if(list.length > 0) {

        return (<div>
            {list.map((e) => (
                 e.funny !== 0 ? 
                <div> <div>{e.title}{e.date}</div>
                <img className="postimgs"src={e.img} alt=''></img>
                {e.clicked === true ? <div><input id={e._id}type="text" placeholder='Dog? Dog. Dog!' onChange={(e) => setTxt(e.target.value)}></input> 
                <button onClick={()=> {e.comment = [txt, ...e.comment]; setKell(kell + e.funny); updatePost(e); document.getElementById(e._id).value = ""}}>Comment</button>
                {e.comment.length > 0 ? e.comment.map((e) => <div>{e}</div>) : null} </div>: null}
                
                <div className='container'>
                    <button onClick={() => {e.likes = e.likes + 1;setKell(kell + e.likes);updatePost(e); setSomt(Math.floor(Math.random() * 100))}}>
                        <img className='logos' src={likelogo} alt='like'></img>
                    </button>
                    <button onClick={() => {e.funny = e.funny+1;setKell(kell + e.funny); updatePost(e); setSomt(Math.floor(Math.random() * 100))}}>
                    <img className='logos' src={funnylogo} alt='funny'></img>
                    <div>{e.funny}</div>
                    </button>
                    <button onClick={() => {e.clicked = !e.clicked;setKell(kell + e.funny); updatePost(e); setSomt(Math.floor(Math.random() * 100))}}>
                    <img className='logos' src={commentlogo} alt='comment'></img>
                    </button>
                    <button onClick={() => {e.fav = !e.fav;setKell(kell + e.funny); updatePost(e); setSomt(Math.floor(Math.random() * 100))}}>
                    <img className='logos' src={favlogo} alt='fav'></img>
                    {e.fav === true ? <div>You've added this post to your favourite list!</div> : null}
                    </button>
                </div>
                <div>Liked {e.likes} times.</div>
                </div>
                 : null
            )
            )
            }
        
    </div>)

} else return <div>There aren't any posts yet.</div>
}