import H1Title from "../src/h1-page-title/h1.component";
import SearchBox from "./search-box/search-box.component";
import ShowSearch from "./show-search/show-search.component";
import { useState } from "react";
import { useEffect } from "react";
import './App.css';
import MemeList from "./meme-list/meme-list.component";

const App = () => {

  const [Memes, setMemes] = useState([]);
  const [searchStringMemes, setsearchStringMemes] = useState("");
  const [filteredMemes, setFilteredMemes]= useState([]);



  //-------------------------------------------------------------------------------------------

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(notJsonListYet => notJsonListYet.json()).then(JsonListNow => setMemes(JsonListNow.data.memes)
  )}, []);


  //-------------------------------------------------------------------------------------------



   useEffect(() => {
    const newMemes = Memes.filter((newList) => {
       return newList.name.toLocaleLowerCase().includes(searchStringMemes);
     });
     setFilteredMemes(newMemes);
   }, [Memes, searchStringMemes]);


  //-------------------------------------------------------------------------------------------
 
  const searchString = (ThisElement) => {
      const newStringTyped = ThisElement.target.value.toLocaleLowerCase();
      return setsearchStringMemes(newStringTyped);
  };


  return (
    <main>
      <H1Title/>
      <ShowSearch showString={searchStringMemes}/>
      <SearchBox onEventHandler={searchString}/>
      <MemeList listToRender={filteredMemes}/>
    </main>
  );

   

}

export default App;
