import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customize = () => {
    const navigate = useNavigate();

    const handleAutomaticOption = () => {
        // Navigate to the page for the automatic option
        navigate('/automatic');
    };

    const handleUserGivenQuantityOption = () => {
        // Navigate to the page for the user given quantity option
        navigate('/user-given-quantity');
    };

    const handleUserGivenIngredientsOption = () => {
        // Navigate to the page for the user given ingredients option
        navigate('/ingredients');
    };

    const backgroundImageUrl = 'https://images.unsplash.com/photo-1649437662540-36470c1ebd86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center animate-gradient-x bg-gray-200" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-8 text-black">Hey Viewer! It's your choice in here!!</h1>
                {/* Display three buttons for the three options */}
                <div className="space-y-4 items-center justify-center">
                    <button onClick={handleAutomaticOption} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-4">Automatic</button><br/>
                    <button onClick={handleUserGivenQuantityOption} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-4">It's My Choice of Quantity</button><br/>
                    <button onClick={handleUserGivenIngredientsOption} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-4">With These Ingredients, What All Can Be Done?</button><br/>
                </div>
            </div>
        </div>
    );
};

export default Customize;
