import './App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Services from './components/Services';
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
      {/* <Ratings /> */}
      <Services />
      <StepsMain />
      <Partners />
      {/* <Founder /> */}
      <Form />
      <Footer />
    </div>
  );
}

export default App;
