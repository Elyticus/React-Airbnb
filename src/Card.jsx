export default function Card(props) {
  let badgeText;

  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "Online";
  }
  return (
    <>
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img
          className="card-image"
          src={props.card.coverImg}
          alt="Profile image"
        />

        <div className="rating">
          <img
            className="star-icon"
            src={props.card.stats.starImage}
            alt="Star icon in PNG format"
          />

          <p className="rating-text">
            {props.card.stats.rating} {props.card.stats.reviewCount}{" "}
            {props.card.location}
          </p>
        </div>

        <p className="card-text">{props.card.title}</p>

        <p className="card-price">
          <span>From ${props.card.price}</span> / person
        </p>
      </div>
    </>
  );
}
