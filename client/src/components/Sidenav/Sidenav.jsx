import "./Sidenav.css"
import lol from "../logos/dog.png"
import house from "../logos/kennel.png"
import rule from "../logos/rule.png"
import fav from "../logos/fav.png"
export default function Sidenav ({setHome}) {
    return (
        <div className="homepage__nav">
            
            <div className="nav__items"id="Logo"><span>Dogsta</span></div>
            
            <button className="nav__items"id="Images" onClick={() => {setHome(0)}}><img className="logos" alt=''src={house}/>Home</button>
            <button className="nav__items"id="Jokes" onClick={() => {setHome(1)}} ><img className="logos"alt=''src={lol}/>Jokes</button>
            <button className="nav__items"id="FavList" onClick={() => {setHome(2)}}><img className="logos"alt=''src={fav}/>FavList</button>
            <button className="nav__items"id="Rules" onClick={() => {setHome(3)}} ><img className="logos"alt=''src={rule}/>Rules</button>
        
        </div>
    )
}