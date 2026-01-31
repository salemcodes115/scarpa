/**
 * Generate a random hexadecimal color code
 * @returns {string} A random color in hexadecimal format (e.g., "#FF5733")
 */
function getRandomColor() {
    // Generate random numbers from 0 to 255 for RGB values
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    // Generate 6 random hexadecimal digits
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

/**
 * Alternative method using RGB values
 * @returns {string} A random color in RGB format (e.g., "rgb(255, 87, 51)")
 */
function getRandomColorRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the color box and button elements
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Add click event listener to the button
    changeColorBtn.addEventListener('click', function() {
        // Generate a random color
        const randomColor = getRandomColor();
        
        // Apply the random color to the color box background
        colorBox.style.backgroundColor = randomColor;
    });
});
