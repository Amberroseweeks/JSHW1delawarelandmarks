
const resultsDiv = document.getElementsByClassName("results")[0];

const cities = [
    { name: "Houston", population: 2099451, landmark: "NASA Space Center" },
    { name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign" },
    { name: "New York", population: 8175133, landmark: "Statue of Liberty" },
    { name: "Chicago", population: 2695598, landmark: "Willis Tower" },
    { name: "Philadelphia", population: 1526006, landmark: "Independence Hall" },
  ];





const populateCities = (cities) => {
  
  cities.forEach((city) => {
    resultsDiv.innerHTML += `<div><b>${city.name}</b>, a city with a population of ${city.population}, is famous for the ${city.landmark}.</div>`;
  });
};


const filterCities = (event) => {
  const eventinput = document.getElementById("event");
  resultsDiv.innerHTML = "";
    const searchTerm = eventinput.value
    const filteredCities = cities.filter((city) => {
      return city.name.toLowerCase().includes(searchTerm);
    });
  
    populateCities(filteredCities);
  };
    

populateCities(cities);

