import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Footer, Header } from './components';
import { Contact, Home } from './pages';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
