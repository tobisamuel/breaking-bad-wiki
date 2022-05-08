import { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const StarRatings = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return createArray(totalStars).map((n, i) => (
    <FaStar
      key={i}
      className={selectedStars > i ? "text-amber-500" : "text-gray-500"}
      onClick={() => setSelectedStars(i + 1)}
    />
  ));
};

export default StarRatings;
