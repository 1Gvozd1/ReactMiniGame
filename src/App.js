import './App.css';
import {GridSquare} from "./сomponents/gridsquare/GridSquare";
import {useState} from "react";
import {Level} from "./сomponents/level/Level";

function App() {
  const[size, setSize] = useState(1);
  const[isSelect, setIsSelect] = useState(false);

  function sizeChange(value){
      setIsSelect(true)
      setSize(value);
  }
    const refreshPage = () => {
      window.location.reload();
    }
  return(
    <div className="full-screen">
        <button className={'change'} onClick={refreshPage}>R</button>
        {[...new Array(4)].map((el,i) => <Level sizeChange={sizeChange} value={(i+1)*2} isSelect={isSelect} key={i}/>)}
        <p className={'size'}>{size} x {size}</p>
        <GridSquare size={size}/>
    </div>
  );
}

export default App;
