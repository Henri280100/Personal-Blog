import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Slider from "../../components/slider/Silder";
import "./home.css";

export default function Home() {
  const imgGallery = [
    {
      image: require("../../assets/Motorcycle.png"),
      title: "Motorcycle",
    },
    {
      image: require("../../assets/Tech.png"),
      title: "Tech",
    },
    {
      image: require("../../assets/Traveling.png"),
      title: "Traveling",
    },
    {
      image: require("../../assets/LifeStyle.jpg"),
      title: "Life Style",
    },
    {
      image: require("../../assets/Style.jpg"),
      title: "Style",
      style: {
        width: "125%",
        height: "185px",
        overflow: "hidden",
      },
    },
  ];

  return (
    <>
      <Header />
      <Slider data={imgGallery} />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
