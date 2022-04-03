import './App.css';
import { Navbars,Topbar,NavDekstop} from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Accessories from './Components/Accessories';
import About from './Components/About';
import Faq from './Components/Faq';
import Shop from './Components/Shop';
import Catagory from './Components/Catagory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import { BackTopBtn } from './Components/BacktoTopBtn';
import { Redirect } from 'react-router-dom';


function App() {
  return (
   <>
   <Router>
   <BackTopBtn/>
   <Topbar/>
     <Navbars/>
     <NavDekstop/>
     <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact  path="/accessories" component={Accessories}/>
          <Route exact path="/category" component={Catagory}/>
          <Route   exact path="/shop" component={Shop}/>
          <Route exact path="/faqs" component={Faq}/>
          <Redirect to={Home}/>

      </Switch>

     <Footer/>
   </Router>
   </>
  );
}

export default App;

// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////

  

