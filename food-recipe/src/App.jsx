import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailsPageOnMobile from "./components/DetailsPageOnMobile";
import Homepage from "./Pages/Homepage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/DetailsPageOnMobile' element={<DetailsPageOnMobile/>}/>
          {/* <Route path='*' element={<PageNotFound/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
