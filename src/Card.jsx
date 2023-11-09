export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }
  return (
    <>
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img
          className="card-image"
          src={props.coverImg}
          alt="Profile image with Katie Zaferes in the swimming pool"
        />

        <div className="rating">
          <img
            className="star-icon"
            src={props.stats.starImage}
            alt="Star icon in PNG format"
          />

          <p className="rating-text">
            {props.stats.rating} {props.stats.reviewCount} {props.location}
          </p>
        </div>

        <p className="card-text">{props.title}</p>

        <p className="card-price">
          <span>From ${props.price}</span> / person
        </p>
      </div>
    </>
  );
}
