// DOMContentLoaded event ensures that the JavaScript code executes after the HTML has loaded
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code goes here
    // For example, you can add interactivity, fetch data from an API, or implement sliders
    
    // Sample code to display an alert when the page loads
    alert("Welcome to Netflix!");
    
    // Sample code to fetch data from an API and display it on the page
    fetch("https://api.example.com/movies")
      .then((response) => response.json())
      .then((data) => {
        // Process the data and display it on the page
        // For example, update the trending or top-picks sections with the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
  