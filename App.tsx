import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, MapPin } from 'lucide-react';
import { NAV_LINKS } from './constants';
import Home from './pages/Home';
import Project from './pages/Project';
import DemocracyMethod from './pages/DemocracyMethod';
import About from './pages/About';
import Involved from './pages/Involved';
import Transparency from './pages/Transparency';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 tracking-tight">AHMED <span className="text-orange-500">MATAR</span></span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Vénissieux 2026</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-orange-500 ${
                  location.pathname === link.path ? 'text-orange-500' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/agir" className="bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-md active:scale-95">
              Rejoindre
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/agir"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-orange-500 text-white px-5 py-3 rounded-lg text-sm font-bold mt-4 shadow-lg"
          >
            Rejoindre le mouvement
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Ahmed <span className="text-orange-500">Matar</span></h3>
          <p className="text-slate-400 mb-6 italic">
            "Pour une mairie indépendante, solidaire et pilotée par ses habitants de Vénissieux."
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-4 uppercase tracking-wider">Contact Local</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" /> 
              <span>36 rue Auguste Blanqui<br />69200 Vénissieux</span>
            </li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-orange-500" /> contact@matar2026.fr</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-orange-500 pl-4 uppercase tracking-wider">Engagement</h4>
          <p className="text-slate-500 text-sm">Union des Vénissians Indépendants et Solidaires.</p>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
        <p>© 2026 Ahmed Matar - Élections Municipales Vénissieux.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projet" element={<Project />} />
            <Route path="/methode" element={<DemocracyMethod />} />
            <Route path="/transparence" element={<Transparency />} />
            <Route path="/parcours" element={<About />} />
            <Route path="/agir" element={<Involved />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
