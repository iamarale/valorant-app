// https://valorant-api.com/v1/agents
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import MainContent from "./Components/MainContent";

// const reducer(){
//   switch (key) {
//     case value:
//       return console.log(`lol`)

//     default:
//       throw new Error("something went wrong lol")
//   }
// }

export default function App() {
  // state
  const [query, setQuery] = useState('agents');
  const [isLoading, setIsLoading] = useState(false)
  const [valData, setValData] = useState([]);
  const [curSelected, setCurSelected] = useState(false)
  // const initialState = {}
  // const [state, dispatch] = useReducer(reducer, '');


  // useEffects
  useEffect(() => {
    async function getValorantData() {
      try {
        setIsLoading(true)
        const res = await fetch(`https://valorant-api.com/v1/${query}`);
        if (!res.ok) throw new Error("There was an error fetching the dagrGRGARGARGta");
        const data = await res.json();
        setIsLoading(false)
        // valData holds api data
        setValData(data.data)
      } catch (err) {
        console.error(err)
      }
    }
    // runs init render and everytime query gets updated
    getValorantData()
  }, [query]);


  return (
    <div className={`max-h-max px-2 duration-200 `}>
      <Header />
      <Navigation />

      {/* displays content based on nav option*/}
      <MainContent isLoading={isLoading} valData={valData} curSelected={curSelected} setCurSelected={setCurSelected} />
    </div>
  )
}



