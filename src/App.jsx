import './App.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Collections from './components/Collections';
import Editorial from './components/Editorial';
import Products from './components/Products';
import { Lookbook, Testimonials, Newsletter, Footer } from './components/Sections';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Collections />
      <Editorial />
      <Products />
      <Lookbook />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
