import './App.css';
import {useState} from "react";
const App = () => {
  const newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const updateTime = () =>{
    const newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }
  setInterval(updateTime,1000);
  return(
    <>
      <div className='clock'>
        <h1 className='heading'>{ctime}</h1>
      </div>
    </>
  )
}

export default App;
