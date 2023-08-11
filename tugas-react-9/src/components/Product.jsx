import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/foods")
      .then((response) => response.json())
      .then((foods) => setFoods(foods));
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {foods.map((food, i) => (
        <div
          key={i}
          className="border shadow-lg rounded-lg hover:scale-105 duration-300"
        >
          <Link to={`/foods/${food.id}`}>
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
          </Link>
          <div className="flex justify-between px-2 py-4">
            <p className="font-bold">{food.name}</p>
            <p>
              <span className="bg-cyan-500 text-black p-1 rounded-full">
                Rp {food.price}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
