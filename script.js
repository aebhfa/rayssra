document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and display numbers from the database
    function displayNumbers() {
        // Replace this with code to fetch numbers from your database
        const numbers = ["game.Players.LocalPlayer:Kick()"];

        const numberList = document.getElementById("number-list");

        // Create a single string with just commas, no spaces
        const numbersAsString = numbers.join(',');

        // Set the content of the <pre> element
        numberList.textContent = numbersAsString;
    }

    // Call the function to initially display the numbers
    displayNumbers();
});
