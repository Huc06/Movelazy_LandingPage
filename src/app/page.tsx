import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-black text-white" 
      style={{ backgroundImage: "url('/Background.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}