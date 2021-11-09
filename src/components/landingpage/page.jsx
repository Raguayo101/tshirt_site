import Aside from './aside';
import Content from './content';
import Footer from './footer';
import Navbar from './nav';

const LandingPage = () => {
  return (
    <main className='container'>
      <Navbar />
      <Aside />
      <Content />
      <Footer />
    </main>
  );
};

export default LandingPage;
