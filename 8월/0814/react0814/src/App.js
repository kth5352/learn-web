import { useState } from "react";
import Photo from "./Photo";
import PhotoList from "./pages/Photolist";

const App = () => {
  const [photoArr, setPhotoArr] = useState([
    {
      no: 1,
      img: "img/img1.png",
      title: "환경친화적 전기차",
      content:
        "전기차는 화석연료를 이용하는 것이 아니기 때문에 기존의 차량보다 조금 더 친환경적이다.",
    },
    {
      no: 2,
      img: "img/img2.jpg",
      title: "넓은 바다, 내리쬐는 여름의 태양볕",
      content: "여름 바다의 햇빛은 매우 강하다. 선크림 필수",
    },
    {
      no: 3,
      img: "img/img3.jpg",
      title: "카후란 무엇인가?",
      content: "부자가 되고 싶어요.",
    },
  ]);

  return (
    <div className="w3-content">
      {photoArr.map(function (item) {
        return <Photo key={item.no} item={item} />;
      })}
      {/* <PhotoList photoArr={photoArr} /> */}
    </div>
  );
};

export default App;
