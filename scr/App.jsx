import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import RandomColor from './Randomcolorgenerate/randoncolor';



function App() {
  return (

    <>
      <Header />
      <Routes>
            <Route path="/" element={<RandomColor />}>Random Color Generator</Route>
        
      </Routes>




    </>
  )
}

export default App;