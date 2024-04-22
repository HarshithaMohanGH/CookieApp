import React, { useState, useEffect } from 'react';

const Automatic = () => {
    const [inventory, setInventory] = useState({
        Flour: { quantity: 5000, unit: 'g', costPerUnit: 0.5, caloriesPerUnit: 19 },
        Sugar: { quantity: 3000, unit: 'g', costPerUnit: 0.8, caloriesPerUnit: 48 },
        Butter: { quantity: 2000, unit: 'g', costPerUnit: 1.2, caloriesPerUnit: 39 },
        ChocolateChips: { quantity: 1000, unit: 'g', costPerUnit: 2.5, caloriesPerUnit: 26 },
        VanillaExtract: { quantity: 500, unit: 'ml', costPerUnit: 3.0, caloriesPerUnit: 8 },
        BakingPowder: { quantity: 200, unit: 'g', costPerUnit: 0.3, caloriesPerUnit: 12 },
        Oil: { quantity: 2000, unit: 'ml', costPerUnit: 1.2, caloriesPerUnit: 32 }
    });

    const [selectedIngredients, setSelectedIngredients] = useState([
        'Flour',
        'Sugar',
        'ChocolateChips',
        'VanillaExtract',
        'BakingPowder'
    ]);
    const [availableShapes, setAvailableShapes] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [manufactureTime, setManufactureTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        const filterAvailableShapes = () => {
            const mandatoryIngredients = ['Flour', 'Sugar', 'ChocolateChips', 'VanillaExtract', 'BakingPowder'];
            const hasMandatoryIngredients = mandatoryIngredients.every(ingredient => selectedIngredients.includes(ingredient));

            if (!hasMandatoryIngredients) {
                setTotalCost(0);
                alert('Please select all mandatory ingredients: Flour, Sugar, ChocolateChips, VanillaExtract, BakingPowder');
                return;
            }

            const availableShapes = [];

            if (selectedIngredients.includes('Butter')) {
                availableShapes.push('Barazek (Circle)', 'Dalgona (Square)', 'SnickerDoodle (Triangle)');
            } else if (selectedIngredients.includes('Oil')) {
                availableShapes.push('Barazek (Circle)', 'Gingerbread (Star)', 'SnickerDoodle (Triangle)');
            } else {
                availableShapes.push('Barazek (Circle)', 'Dalgona (Square)', 'Gingerbread (Star)', 'SnickerDoodle (Triangle)');
            }

            setAvailableShapes(availableShapes);
        };

        filterAvailableShapes();
    }, [selectedIngredients]);

    useEffect(() => {
        const calculateMetrics = () => {
            let totalCost = 0;
            let manufactureTime = 0;
            let totalCalories = 0;

            for (const ingredient of selectedIngredients) {
                totalCost = inventory[ingredient].quantity * inventory[ingredient].costPerUnit;
                totalCalories += (inventory[ingredient].quantity * inventory[ingredient].caloriesPerUnit/1000);
            }

            setTotalCost(totalCost);
            setManufactureTime(30);
            setTotalCalories(totalCalories);
        };

        calculateMetrics();
    }, [selectedIngredients, inventory]);

    const handleIngredientChange = (e) => {
        const { value, checked } = e.target;
    
        // Special case for butter and oil: allow deselection
        if (['Butter', 'Oil'].includes(value)) {
            if (checked) {
                setSelectedIngredients([...selectedIngredients, value]);
            } else {
                setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient !== value));
            }
        } else {
            // For other ingredients, prevent deselection
            if (!checked) {
                alert(`${value} is a mandatory ingredient and cannot be deselected.`);
                return;
            }
    
            setSelectedIngredients([...selectedIngredients, value]);
        }
    };
    

    const handlePlaceOrder = () => {
        const orderDetails = `Total Cost: $${totalCost.toFixed(2)}\nManufacture Time: ${manufactureTime} minutes\nTotal Calories: ${totalCalories}`;
        alert(orderDetails);
    };

    const backgroundImageUrl = 'https://images.unsplash.com/photo-1649437662540-36470c1ebd86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div className="max-w-lg mx-auto mt-8 p-4 bg-yellow-200 rounded-lg shadow-md" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className="text-lg font-semibold mb-4">Automatic Biscuit Selection</h2>
            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Select Ingredients:</h3>
                <div>
                    {Object.keys(inventory).map((ingredient) => (
                        <label key={ingredient} className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                value={ingredient}
                                onChange={handleIngredientChange}
                                checked={selectedIngredients.includes(ingredient)}
                                disabled={selectedIngredients.includes(ingredient)}
                            />
                            <span className="ml-2">{ingredient}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h3 className=  "text-md font-medium mb-2">Available Biscuit Shapes:</h3>
                <ul>
                    {availableShapes.map((shape, index) => (
                        <li key={index}>{shape}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <p className="text-md font-medium mb-2">Total Cost: {totalCost.toFixed(2)}</p>
                <p className="text-md font-medium mb-2">Manufacture Time: {manufactureTime} minutes</p>
                <p className="text-md font-medium mb-2">Total Calories: {totalCalories}</p>
            </div>
            <button onClick={handlePlaceOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Place Order
            </button>
        </div>
    );
};

export default Automatic;
