import React, { useState } from "react";

const IngredientsPage = () => {
  const [ingredientQuantities, setIngredientQuantities] = useState({
    flour: 0,
    sugar: 0,
    butter: 0,
    chocolateChips: 0,
    vanillaExtract: 0,
    bakingPowder: 0,
    oil: 0,
  });

  const [maxBiscuits, setMaxBiscuits] = useState({
    circle: 0,
    star: 0,
    square: 0,
    triangle: 0,
  });

  const [biscuitQuantities, setBiscuitQuantities] = useState({
    circle: 0,
    star: 0,
    square: 0,
    triangle: 0,
  });

  const [manufactureTime, setManufactureTime] = useState({
    circle: 0,
    star: 0,
    square: 0,
    triangle: 0,
  });

  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleIngredientChange = (e) => {
    const { name, value } = e.target;
    setIngredientQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: Math.max(parseInt(value), 100), // Ensure minimum quantity is 100
    }));
  };

  const calculateMaxBiscuits = () => {
    // Calculate maximum number of biscuits for each shape based on ingredient quantities
    const { flour, sugar, butter, chocolateChips, vanillaExtract, bakingPowder, oil } = ingredientQuantities;

    // Logic to calculate maximum biscuits
    setMaxBiscuits({
      circle: Math.min(flour / 100, sugar / 200, butter / 150, oil / 200),
      star: Math.min(flour / 150, sugar / 250, chocolateChips / 200),
      square: Math.min(flour / 120, sugar / 180, vanillaExtract / 100),
      triangle: Math.min(flour / 180, sugar / 220, bakingPowder / 150),
    });
  };

  const handleBiscuitQuantityChange = (shape, value) => {
    setBiscuitQuantities((prevQuantities) => ({
      ...prevQuantities,
      [shape]: Math.max(parseInt(value), 1), // Ensure minimum order quantity is 1
    }));
  };

  const calculateManufactureTime = () => {
    // Calculate manufacture time for each shape based on number of biscuits
    const bakingTimes = { circle: 10, star: 12, square: 15, triangle: 8 };
    const newManufactureTime = {};
    for (const shape in biscuitQuantities) {
      newManufactureTime[shape] = (biscuitQuantities[shape] * bakingTimes[shape])/24;
    }
    setManufactureTime(newManufactureTime);
  };

  const calculateTotalCalories = () => {
    // Calculate total calories for all biscuits
    const calorieValues = { circle: 50, star: 60, square: 70, triangle: 40 };
    let totalCalories = 0;
    for (const shape in biscuitQuantities) {
      totalCalories += biscuitQuantities[shape] * calorieValues[shape];
    }
    setTotalCalories(totalCalories);
  };

  const calculateTotalCost = () => {
    // Calculate total cost for all biscuits
    let totalCost = 0;
    for (const shape in biscuitQuantities) {
      totalCost += biscuitQuantities[shape] * 2; // Assuming a flat rate of $2 per biscuit
    }
    setTotalCost(totalCost);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    calculateManufactureTime();
    calculateTotalCalories();
    calculateTotalCost();
  };



  return (
    <div className="container mx-auto bg-gray-200" >
      <h2 className="text-2xl font-bold mb-4">Ingredient Quantities</h2>
      <form onSubmit={handlePlaceOrder} className="mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-300">Ingredient</th>
              <th className="py-2 px-4 border border-gray-300">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(ingredientQuantities).map((ingredient) => (
              <tr key={ingredient}>
                <td className="py-2 px-4 border border-gray-300">{ingredient}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <input
                    type="number"
                    value={ingredientQuantities[ingredient]}
                    onChange={handleIngredientChange}
                    name={ingredient}
                    className="w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md p-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Input fields for biscuit quantities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Biscuit Orders</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="circle" className="block font-medium text-gray-700">
                Circular Biscuits:
              </label>
              <input
                type="number"
                id="circle"
                value={biscuitQuantities.circle}
                onChange={(e) => handleBiscuitQuantityChange("circle", e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="Square" className="block font-medium text-gray-700">
                Square Biscuits:
              </label>
              <input
                type="number"
                id="square"
                value={biscuitQuantities.square}
                onChange={(e) => handleBiscuitQuantityChange("square", e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="Star" className="block font-medium text-gray-700">
                Star Biscuits:
              </label>
              <input
                type="number"
                id="star"
                value={biscuitQuantities.star}
                onChange={(e) => handleBiscuitQuantityChange("star", e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="Triangle" className="block font-medium text-gray-700">
                Triangle Biscuits:
              </label>
              <input
                type="number"
                id="triangle"
                value={biscuitQuantities.triangle}
                onChange={(e) => handleBiscuitQuantityChange("triangle", e.target.value)}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* Add input fields for other biscuit shapes */}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Place Order
        </button>
      </form>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Manufacture Time</h2>
        <ul>
          <li>Circular Biscuits: {manufactureTime.circle} minutes</li>
          <li>Star Biscuits: {manufactureTime.star} minutes</li>
          <li>Square Biscuits: {manufactureTime.square} minutes</li>
          <li>Triangular Biscuits: {manufactureTime.triangle} minutes</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Total Calories: {totalCalories}</h2>
        <h2 className="text-2xl font-bold mb-4">Total Cost: {totalCost}</h2>
      </div>
    </div>
  );
};

export default IngredientsPage;
