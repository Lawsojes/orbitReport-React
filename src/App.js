import React, {useState} from "react"
import {Buttons} from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/banner";
import satData from "./components/satData";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
 };

  return (
    <div >
      <Banner />
      {/* <ButtonMap /> */}
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
      
    </div>
  );
}

export default App;
