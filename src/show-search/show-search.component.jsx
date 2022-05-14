

const ShowSearch = (showString) => {

    const userSearchView = showString.showString

    console.log(userSearchView);

    return (   
       <p>Your search: {userSearchView}</p>
    )

}


export default ShowSearch;