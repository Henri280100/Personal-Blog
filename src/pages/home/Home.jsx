import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Slider from "../../components/slider/Silder";
import {motion} from "framer-motion";
import "./home.css";

export default function Home() {
  const imgGallery = [
    {
      image: require("../../assets/Motorcycle.png"),
      title: "Motorcycle",
      style: {
        width: "290px",
        border: "2px solid black",
      },
    },
    {
      image: require("../../assets/Tech.png"),
      title: "Tech",
      style: {
        border: "2px solid black",
      },
    },
    {
      image: require("../../assets/Traveling.png"),
      title: "Traveling",
      style: {
        width: "290px",
        border: "2px solid black",
      },
    },
    {
      image: require("../../assets/LifeStyle.jpg"),
      title: "Life Style",
      style: {
        width: "290px",
        border: "2px solid black",
      },
    },
    {
      image: require("../../assets/Style.jpg"),
      title: "Style",
      style: {
        width: "290px",
        border: "2px solid black",
      },
    },
  ];

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Header />
      <Slider data={imgGallery} />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </motion.div>
  );
}
