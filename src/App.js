import './App.css';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import AboutUsMore from './components/About/AboutUsMore';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Shop from './components/Shop/Shop';
import AuthProvider from './components/Login/Context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import BuyPage from './components/BuyPage';


function App() {
  return (
    <AuthProvider>
      <div className="App">
      
      <Routes>
         <Route path="/" element={ <Home/> } />
         <Route path="about" element={ <AboutUsMore/> } />
         <Route path="contact" element={ <Contact/> } />
         <Route path="blog" element={ <Blog/> } />
         <Route path="register" element={ <Register/> } />
         <Route path="login" element={ <Login/> } /> 
        <Route path="dashboard" element={ <Dashboard/> } /> 
        <Route path="/:productId" element={ <BuyPage/> } /> 
       </Routes>
     </div>
    </AuthProvider>
  );
}

export default App;
