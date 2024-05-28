import {
  Sidebar,
  Parallax,
  Services,
  Hero,
  Navbar,
  Portfolio,
  Contacts,
  Cursor
} from './components/index';
import './app.scss';

const App = () => {
  return (
    // <div className="custom-cursor">
    <>
      <Cursor />
        <Sidebar />
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <Parallax type='services' />
      <Services />
      <Parallax type='portfolio' />
      <Portfolio />
      <Contacts />
      {/* </div> */}
    </>
  );
};

export default App;
