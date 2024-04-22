import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SampleBill() {
    const [rating, setRating] = useState(0); // User rating state
    const navigate = useNavigate();

    // Function to handle back to place order button click
    const handleBackToPlaceOrder = () => {
        // Redirect to home page
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center">Thanks for being our trusted buyer! Visit us back anytime!</h1>
            <div className="mb-8">
                
                <p className="mb-2 text-lg">User Rating: {rating}/5</p>
                <div>
                    {/* Display star icons for rating */}
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`cursor-pointer text-3xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            onClick={() => setRating(index + 1)}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <p className="mb-2 text-lg">Scan the QR code to pay!</p>
                {/* Dummy QR code image */}
                <img src="https://pngimg.com/d/qr_code_PNG25.png" alt="QR Code" className="w-48 h-48" />
            </div>
            <div>
                {/* Back to Place Order button */}
                <button onClick={handleBackToPlaceOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Place Order
                </button>
            </div>
        </div>
    );
}
