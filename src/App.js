import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Contact from './pages/Conatct';
import NotFound from './pages/NotFound';
import Recipe from './pages/Recipe';
import Header from './componets/Header';
import Footer from './componets/Footer';

const App = ()=> {
  return (
   <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/category/:name' element={<Category/>}/>
          <Route path='/recipe/:id' element={<Recipe/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
   </Router>
  );
}

export default App;

