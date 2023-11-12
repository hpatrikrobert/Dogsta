import './posts.css'
import likelogo from '../logos/thumbs-up.png'
import favlogo from '../logos/pawprint.png'
import commentlogo from '../logos/bark.png'
import funnylogo from '../logos/laughing.png'
import React, { useState } from 'react'

export default function Posts ({setSomt, home, list, updatePost}) {
    const [txt, setTxt] = useState("");
    const [kell, setKell] = useState(null);
if(home !== 0) {
    return
}
if(list.length > 0) {

        return (<div>
            {list.map((e) => (
                (<div> <div className='titles'><div classname='titlenames'>{e.title}</div><div>Created at: {e.date}</div></div>
                <img className="postimgs"src={e.img} alt=''></img>
                {e.clicked === true ? <div><input id={e._id}type="text" placeholder='Dog? Dog. Dog!' onChange={(e) => setTxt(e.target.value)}></input> 
                <button onClick={()=> {e.comment = [txt, ...e.comment]; setKell(kell + e.funny); updatePost(e); document.getElementById(e._id).value = ""}}>Comment</button>
                {e.comment.length > 0 ? e.comment.map((e) => <div className='comment-section'>{e}</div>) : null} </div>: null}
                
                <div className='container'>
                    <button onClick={() => {e.likes = e.likes + 1;setKell(kell + e.likes);updatePost(e); setSomt(Math.floor(Math.random() * 100))}}>
                        <img className='logos' src={likelogo} alt='like'></img>
                        <div>Likes:{e.likes}</div>
                    </button>
                    <button onClick={() => {e.funny = e.funny+1;setKell(kell + e.funny); updatePost(e); setSomt(Math.floor(Math.random() * 100))}}>
                    <img className='logos' src={funnylogo} alt='funny'></img>
                    <div>Funny:{e.funny}</div>
                    </button>
                    <button onClick={() => {e.clicked = !e.clicked;setKell(kell + e.funny); updatePost(e); setSomt(Math.floor(Math.random() * 100))}}>
                    <img className='logos' src={commentlogo} alt='comment'></img>
                    {e.clicked ? <div>Msg: on</div> : <div>Msg: off</div> }
                    </button>
                    <button onClick={() => {e.fav = !e.fav;setKell(kell + e.funny); updatePost(e); setSomt(Math.floor(Math.random() * 100))}}>
                    <img className='logos' src={favlogo} alt='fav'></img>
                    {e.fav === true ? <div>Added to FavList!</div> : <div>Add to FavList!</div>}
                    </button>
                </div>
                </div>)
            ))
            }
        
    </div>)
} else return <div>There aren't any posts yet.</div>
}