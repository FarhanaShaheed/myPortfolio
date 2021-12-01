import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Projects from './Pages/Home/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Details from './Pages/Details/Details';
import { useEffect, useState } from 'react';
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])


  return (
    <div className="App">
      {
        loading ? <div className="preloader">
          <GridLoader color={'aqua'} loading={loading}  size={30} />
        </div>  : <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>

            <Route path="/home">
                <Home></Home>
            </Route>

            <Route path="/projects">
              <Projects/>
            </Route>

            <Route path="/skills">
              <Skills/>
            </Route>

            <Route path="/blog">
              <Blog/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/details/:id">
              <Details/>
            </Route>

          </Switch>
        <Footer/>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
