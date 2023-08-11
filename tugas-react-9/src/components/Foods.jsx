import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Foods = () => {
  const [food, setFood] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/foods/${id}`)
      .then((response) => response.json())
      .then((food) => setFood(food));
  }, [id]);

  return (
    <div className="mt-8 flex justify-center">
      {food ? (
        <div className="shadow-lg rounded-lg">
          <h1 className="text-4xl text-center text-gray-900 mb-8">
            Detail Food
          </h1>
          <img
            src={food.image}
            alt={food.name}
            className="w-[800px] h-[350px] object-cover rounded-t-lg"
          />
          <div className="px-4 py-6 tracking-widest">
            <p className="font-bold">Name : {food.name}</p>
            <p className="text-black">Price : Rp {food.price}</p>
            <p className="font-sm text-black">Category : {food.category}</p>
            <p className="font-sm text-orange-900">
              Description : {food.description}
            </p>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Foods;
