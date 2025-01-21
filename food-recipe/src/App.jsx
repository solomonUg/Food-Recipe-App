import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailsPageOnMobile from "./components/DetailsPageOnMobile";
import Homepage from "./Pages/Homepage";
import FoodItem from "./components/FoodItem";


function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path="/FoodItem" element={<FoodItem />} />
          <Route path='/DetailsPageOnMobile' element={<DetailsPageOnMobile/>}/>
          {/* <Route path='*' element={<PageNotFound/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
