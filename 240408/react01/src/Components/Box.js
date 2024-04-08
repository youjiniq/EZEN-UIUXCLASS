const Box = ({ title }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img
        className="item-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRtMGoGeIPOpktvR3ic5dKqr4PvTGdW7csQ&s"
      ></img>
      <h2>WIN</h2>
    </div>
  );
};

export default Box;

//props안쓰고 하기
