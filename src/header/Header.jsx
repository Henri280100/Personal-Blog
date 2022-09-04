import "./header.css";
import HeaderImg from "../assets/header-img.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Django</span>
        <span className="headerTitleLg">My Blog</span>
      </div>
      <img className="headerImg" src={HeaderImg} alt="" />
    </div>
  );
}
