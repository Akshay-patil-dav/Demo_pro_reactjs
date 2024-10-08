
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Nav from './parts/nav';
import "./css/Style.css"
import Imgheader from './parts/Imgheader';
import Info from './parts/info';
import About from './parts/About';
import Service from './parts/Service';
import Login from './parts/Login';
import Footer from './parts/Footer';

function App() {
  return (
   <>
   <Nav/>
   <Imgheader />
   <Info />
   <About />
   <Service/>
   <Login/>
   <Footer/>  
   </>
  );
}

export default App;
