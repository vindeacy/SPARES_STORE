import './App.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Header from './constants/Header';
import Footer from './constants/Footer';

function App() {
  return (
    <>     
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;