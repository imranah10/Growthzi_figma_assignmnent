import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Pages } from './components/pages/Pages';
import { Contact } from './components/pages/Contact';
import { Footer } from './components/common/Footer';
import { Navbar } from './components/common/Navbar';
import { ErrorContext } from './components/pages/context/ErrorContext';

function App() {
  const errorpagedata = {
    error: '404',
    title: 'Oops!! Something is Missing',
    desc: 'Sorry But The Page You Are Looking For Does Not Exist, Have Been Removed, Name Changed Or Is Temporarily Unavailable',
  };

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/pages"
          element={
            <ErrorContext.Provider value={errorpagedata}>
              <Pages />
            </ErrorContext.Provider>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
