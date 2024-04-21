import {
  Parallax,
  Services,
  Hero,
  Navbar
} from "./components/";

const App = () => {
  return (
    <div>
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id='services'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section id='portfolio'>
        <Parallax type='portfolio' />
      </section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="Contacts">Contacts</section>
    </div>
  );
};

export default App;
