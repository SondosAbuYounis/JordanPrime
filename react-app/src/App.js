import logo from './logo.svg';
import './App.css';
import Register, { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogDetails } from './pages/BlogDetails';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WriteABlog } from './components/WriteABlog';
import { BlogFormpPage } from './pages/BlogFormpPage';
import SingIn from './pages/SingIn';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>*
        <Route path='/' element={<Home />}/>
        <Route path='/card/:id' element={<BlogDetails />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/blogform' element={<BlogFormpPage />}/>
        <Route path='/signin' element={<SingIn />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
