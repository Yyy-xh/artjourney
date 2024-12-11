import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import VirtualTour from './components/VirtualTour';
import Community from './components/Community';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Gallery />} />
                    <Route path="/virtual-tour" element={<VirtualTour />} />
                    <Route path="/community" element={<Community />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
