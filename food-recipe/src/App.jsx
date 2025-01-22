import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailsPageOnMobile from "./components/DetailsPageOnMobile";
import Homepage from "./Pages/Homepage";
import FoodItem from "./components/FoodItem";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Blog from "./Pages/Blog";
import SignIn from "./Pages/SignIn";
import PageNotFound from "./Pages/PageNotFound";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path="/FoodItem" element={<FoodItem />} />
          <Route path='/DetailsPageOnMobile' element={<DetailsPageOnMobile/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
