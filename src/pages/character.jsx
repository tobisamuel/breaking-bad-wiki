import { useLocation } from "react-router-dom";

const Character = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <img src={data.img} className="w-1/4" />
      <h1 className="font-extrabold text-4xl text-amber-400">{data.name}</h1>
      <h4 className="font-bold text-xl text-amber-600">{data.nickname}</h4>
    </>
  );
};

export default Character;
