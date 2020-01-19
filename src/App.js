import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <section className="container my-4">
      <Header />
      <Body />
      <Footer />
    </section>
  );
}

export default App;
