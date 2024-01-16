import './App.scss';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Home from './components/Home';
import PortfolioPage from './components/PortfolioPage';
import Footer from './components/layout/Footer';
import Lenis from '@studio-freight/lenis'
import Wefox from './components/Wefox';
import Mineiros from './components/Mineiros';
import Toyota from './components/Toyota';
import Theorem from './components/Theorem';
import Misterspex from './components/Misterspex';
import Neom from './components/Neom';
import Gea from './components/Gea';
import Brickblock from './components/Brickblock';
import Kenjo from './components/Kenjo';


function App() {

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {

    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <Header />
        <Switch>
          <Route path="/kenjo">
            <Kenjo />
          </Route>
          <Route path="/brickblock">
            <Brickblock />
          </Route>
          <Route path="/gea">
            <Gea />
          </Route>
          <Route path="/neom">
            <Neom />
          </Route>
          <Route path="/misterspex">
            <Misterspex />
          </Route>
          <Route path="/theorem">
            <Theorem />
          </Route>
          <Route path="/toyota">
            <Toyota />
          </Route>
          <Route path="/mineiros">
            <Mineiros />
          </Route>
          <Route path="/wefox">
            <Wefox />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />

      </BrowserRouter>
      {/* <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/portfolio' element={<PortfolioPage/>}></Route>
      </Routes> */}
    </>
  );
}

export default App;
