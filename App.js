import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="sticky top-0 bg-slate-800 text-amber-300 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">M|E</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a className="hover:bg-cyan-600 active:bg-cyan-700 p-2 rounded" href="#Home">Home</a></li>
              <li><a className="hover:bg-cyan-600 active:bg-cyan-700 p-2 rounded" href="#About">About</a></li>
              <li><a className="hover:bg-cyan-600 active:bg-cyan-700 p-2 rounded" href="#projects">Projects</a></li>
              <li><a className="hover:bg-cyan-600 active:bg-cyan-700 p-2 rounded" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.github.com/shadowrahlm" className="hover:text-cyan-600"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mugabi-edwin-a726b2195" className="hover:text-cyan-600"><FaLinkedin /></a>
            <a href="https://www.instagram.com/maclarenbankz" className="hover:text-cyan-600"><FaInstagram /></a>
            <a href="tel:256765642975" className="hover:text-cyan-600"><FaWhatsapp /></a>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="flex flex-col lg:flex-row justify-around m-12 p-2 gap-4">
          {/* Your other content goes here */}
        </section>
      </main>
    </div>
  );
}

export default App;