const Card = ({ info }) => {
  return (
    <div className="mb-5 bg-green-900 rounded-md overflow-hidden hover:opacity-75">
      <div className="w-full h-72 aspect-square">
        <img
          src={info.img}
          alt=""
          className="w-full h-full object-left-top object-cover"
        />
      </div>

      {/* Card Bottom */}
      <div className="text-xl m-4">
        <span className="text-amber-200 font-bold">{info.name}</span>
        <span className="block text-amber-500 font-light">{info.nickname}</span>
      </div>
    </div>
  );
};

export default Card;
