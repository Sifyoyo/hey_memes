

// const {id, name, url} = listInfo; Alternate deconstruction method

const MemeCard = ({listInfo: {id, name, url}}) => {

    return (
        <div key={`${id}`} className="cards">
            <h2>{name}</h2>
            <img alt={`Name of the meme: ${name}`} src={`${url}`} />
        </div>
   )
}


export default MemeCard;