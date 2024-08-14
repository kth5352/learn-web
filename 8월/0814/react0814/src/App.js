import { useState } from "react";
import Photo from "./Photo";
import PhotoList from "./pages/Photolist";

const App = () => {
  const [photoArr, setPhotoArr] = useState([
    {
      no: 1,
      img: "img/img1.png",
      title: "5 Terre",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      no: 2,
      img: "img/img2.jpg",
      title: "Monterosso",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      no: 3,
      img: "img/img3.jpg",
      title: "Vernazza",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  return (
    <div className="w3-content">
      {photoArr.map(function (item) {
        return <Photo key={item.no} item={item} />;
      })}
      <PhotoList photoArr={photoArr} />
    </div>
  );
};

export default App;
