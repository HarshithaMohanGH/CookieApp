// import React from 'react'

// function About(){
//     return (
//         <div> About </div>
//     )
// }

// export default About


import React from 'react';
import './About.css'; // Import CSS file for styling

function About() {
    // Function to handle click event for showing popup
    const handlePopup = () => {
        const message = prompt("We'd love to hear from you! Please send us a message:");
        if (message) {
            alert("Thank you for your message: " + message);
        }
    };

    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>Welcome to Biscotti Group, where our love for biscuits knows no bounds!</p>
            <p>The Biscotti Group was established in the quaint town of Wellington in 2024. Harshitha Mohan, a passionate biscuit enthusiast. What started as a small gathering of friends sharing recipes and baking tips has now grown into a thriving community of biscuit lovers from all walks of life.</p>
            <p>At Biscotti Group, we believe in the simple pleasures of life - a warm cup of tea paired with a freshly baked biscuit can brighten even the gloomiest of days. Our mission is to spread joy and happiness through the art of biscuit making.</p>
            <p>Whether you're a seasoned baker or a novice in the kitchen, there's a place for you in our biscuit-loving family. Join us as we embark on a delicious journey filled with buttery goodness and sweet memories.</p>
            
            {/* Button to trigger popup */}
            <button className="popup-btn" onClick={handlePopup}>We would love to hear from you send us a message!</button>
        </div>
    );
}

export default About;
