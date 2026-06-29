import './App.css'
import Footer from './components/Fotter';
import Pagination from './components/Pagination';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {


  return (
    <>
    <Navbar />
    <div className="container">
      <h1>Pagination E-Commerce Handler</h1>
      <h2>Welcome to the E-Commerce Pagination Handler</h2>
      <Pagination />
    </div>
    {/* <Footer/> */}
    <Footer/>
    </>
  )
}

export default App
