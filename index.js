const resultsDiv = document.getElementsByClassName("results")[0];

const cities = [
    { name: "Houston", population: 2099451, landmark: "NASA Space Center" },
    { name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign" },
    { name: "New York", population: 8175133, landmark: "Statue of Liberty" },
    { name: "Chicago", population: 2695598, landmark: "Willis Tower" },
    { name: "Philadelphia", population: 1526006, landmark: "Independence Hall" },
  ];

  
    resultsDiv.innerHTML = formattedCities.join("");
 
  


