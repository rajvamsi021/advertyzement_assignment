import React,{useState} from "react";

import Nav from './components/Nav';
import Body from './components/Body';

import './styles.css'

function App() {

  const [drive, setDrive] = useState();

  const sendDataToParent = (index) => { 
    // console.log(index);
    setDrive(index);
  };


  return (
    <div>
      <Nav sendDataToParent={sendDataToParent}/>
      {drive ? <Body /> : <div className="actual">Please click Get Users to find the details of the Users.</div>}
    </div>
  );
}

export default App;
