import React, { useState } from 'react';

export default function SquareBiscuit() {
    // Define the ingredients and their costs
    const ingredients = [
        { name: 'Flour', amount: '100g', cost: '0.50' },
        { name: 'Sugar', amount: '80g', cost: '0.25' },
        { name: 'Butter', amount: '40g', cost: '1.15' },
        { name: 'Oil', amount: '20g', cost: '1.15' },
        { name: 'Chocolate Chips', amount: '30g', cost: '1.00' },
        { name: 'Vanilla Extract', amount: '5g', cost: '0.25' },
        { name: 'Baking Powder', amount: '8g', cost: '0.75' },
    ];

    const [orderQuantity, setOrderQuantity] = useState(1);

    const calculateTotalCost = () => {
        return ingredients.reduce((total, { amount, cost }) => (total + parseFloat(amount) * cost), 0);
    };

    const handlePlaceOrder = () => {
        const totalOrders = orderQuantity;
        const totalCost = calculateTotalCost();
        const confirmation = window.confirm(`You are placing an order for ${totalOrders} biscuit(s). Total cost: ${totalCost.toFixed(2)}. Do you want to proceed?`);
        if (confirmation) {
            // Redirect to home page
            window.location.href = '/';
        } else {
            // Redirect to bill page
            window.location.href = '/bill';
        }
    };

    const backgroundImageUrl = 'https://plus.unsplash.com/premium_photo-1663840074768-b956b2d024fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    return (
        <div className="flex items-center justify-center space-x-4 font-serif" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 75}}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/659/861/small/watercolor-cookies-illustration-png.png" alt="Square" className="h-48 rounded-lg " />
            <div>
                <h2 className="text-xl font-semibold mb-4">Barazek Cookies</h2>
                <p className="text-lg mb-4">
                    Barazek Cookies are round shaped, delicious cookies. <br/>
                    Their main ingredients are Honey and oil, 
                    hence the adjective "yummy". <br/>
                    They have a nutty, sweet tinge and are quite "addictive"
                </p>
                <table className="border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Ingredient</th>
                            <th className="border border-gray-400 px-4 py-2">Amount</th>
                            <th className="border border-gray-400 px-4 py-2">Cost(INR) per unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map((ingredient, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 px-4 py-2">{ingredient.name}</td>
                                <td className="border border-gray-400 px-4 py-2">{ingredient.amount}</td>
                                <td className="border border-gray-400 px-4 py-2">{ingredient.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center mt-4">
                    <label className="mr-2">Number of Orders:</label>
                    <input
                        type="number"
                        min="1"
                        value={orderQuantity}
                        onChange={(e) => setOrderQuantity(e.target.value)}
                        className="border border-gray-400 px-2 py-1 w-16"
                    />
                </div>
                <div className="mt-4">
                    <button onClick={handlePlaceOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
