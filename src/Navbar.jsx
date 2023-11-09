import ProfileLogo from "../public/images/airbnb-logo.png";

export default function Navbar() {
  return (
    <>
      <div className="nabBar">
        <img className="profile-logo" src={ProfileLogo} />
      </div>
    </>
  );
}
