import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";
import data from "./data.js";

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section>{cards}</section>
    </>
  );
}

export default App;
