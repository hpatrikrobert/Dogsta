import { useState } from 'react';
import './Pop.css'
export default function Pop ({list}) {
const [ez, setEz] = useState(false);

    return (list.map((e) => (
            e.likes > 0 ? <div><div>{e.title}</div>   
            <img className="postimgs"src={e.img} alt=''></img> <div >Liked {e.likes} times.</div></div> : null
        )))

}