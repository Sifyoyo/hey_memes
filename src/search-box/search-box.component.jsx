


const SearchBox = ({onEventHandler}) => {

    return( 
    <input id="searchBoxMeme" type="search" placeholder="Search for memes" className="searchBox" onChange={onEventHandler}/>
    )
}

export default SearchBox;