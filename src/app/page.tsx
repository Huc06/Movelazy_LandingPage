import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Header from './components/Header';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default Home;