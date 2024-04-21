import {
  Parallax,
  Services,
  Hero,
  Navbar,
  Portfolio,
  Contacts,
  Cursor,
} from "./components/";
import './app.scss';

const App = () => {
  return (
    <div className="custon-cursor">
      <Cursor />
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <Parallax type='services' />
      <Services />
      <Parallax type='portfolio' />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default App;
