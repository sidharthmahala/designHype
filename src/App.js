import './App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Services1 from './components/Services1';
import StepsMain from './StepsMain';
import Ratings from './components/Ratings';
import Partners from './components/Partners';
import Founder from './components/Founder';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <Topbar />
      <Navbar />
      <Hero />
      <Ratings />
      <Services1 />
      <StepsMain />
      <Partners />
      {/* <Founder /> */}
      <Form />
      <Footer />
    </div>
  );
}

export default App;
