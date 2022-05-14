//import

import MemeCard from "../meme-card/meme-card.component";


const MemeList = ({listToRender}) =>      { 

    
    if(listToRender.length >= 1){
        return(
        <div id="listOfMemes">
        {listToRender.map(newList => {
            return <MemeCard listInfo={newList}/>
        })}
        </div>)
    }

    else{
        return(
        <div>
            <h2>Your input does not match any memes</h2>
        </div>
        )
    }

}




export default MemeList;