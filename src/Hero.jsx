import HeroImage from "../public/images/photo-grid.png";

export default function Hero() {
  return (
    <>
      <div className="container">
        <img className="image-grid" src={HeroImage} />
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
}
