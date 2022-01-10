// rfce for this type of function snippet
// import logo from './logo.svg';
// import './App.css';   
import {useState} from 'react'
import Textform from './Components/Textform'
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
// import Navbar from './Component/Navbar';
function App() {
  
  const propInfo = { title: "TextUtils", about: 8};

  const light = {}
  // const[Mode, setMode] = useState('dark');
  const[Mode, setMode] = useState('light');

  const toogleMode = () => {
    if(Mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
      // document.body.backgroundColor = "#aaaaaa"
      // console.log("toogleMode")
    }
  }  


  return (
    <>
      <div style={ (Mode === 'light') ? {backgroundColor:''} : {backgroundColor:'#cdcdcd'}}>
      {/* <Navbar title = "TextUtils" /> */}
      {/* how to send propTypes as number */}
      <Navbar propInfo = {propInfo} mode ={Mode} tooglemode={toogleMode} Mode={Mode} />
      {/* <Alert /> */}
      {/* <div className="conatianer my-3"> */}
      {/* <div className="conatianer custom-1"> */}
      <Textform heading ='Enter text to utilize' mode={Mode} />
      {/* </div> */}

      </div>
      </>
  );
}

export default App;