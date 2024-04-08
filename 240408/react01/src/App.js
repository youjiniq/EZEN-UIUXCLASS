import { useState } from "react";
import Box from "./Components/Box";
import "./App.css";

// 가위 바위 보 데이터 관리
const choice = {
  scissors: {
    name: "scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRtMGoGeIPOpktvR3ic5dKqr4PvTGdW7csQ&s",
  },
  rock: {
    name: "rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTToEGGRjITJgZzbqd1hjb8ogHPkwDzAqFNw&s",
  },
  paper: {
    name: "paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNBmH4tzRUWX9VQg_BovzP8n8B_AytzK8SrnLQitA1Xi78XffT18tsYUetGJ8nGpWeVA&usqp=CAU",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState("");
  const play = (item) => {
    setUserSelect(choice[item])
  };
  return (
    <div className="container">
      <div className="main">
        <Box title="You" />
        <Box title="Computer" />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
