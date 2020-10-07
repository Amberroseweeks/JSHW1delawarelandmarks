const cities = [
    { name: "Houston", population: 2099451, landmark: "NASA Space Center" },
    { name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign" },
    { name: "New York", population: 8175133, landmark: "Statue of Liberty" },
    { name: "Chicago", population: 2695598, landmark: "Willis Tower" },
    { name: "Philadelphia", population: 1526006, landmark: "Independence Hall" },
  ];
  
//   const populateCities = (cities) => {
//     const resultsDiv = document.getElementsByClassName("results")[0];
//     const formattedCities = cities.map((city) => {
//       return `<div><b>${city.name}</b>, a city with a population of ${city.population}, is famous for the ${city.landmark}.</div>`;
//     });
  
    resultsDiv.innerHTML = formattedCities.join("");
 
  
  const filterCities = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCities = cities.filter((city) => {
      return city.name.toLowerCase().includes(searchTerm);
    });
  
    populateCities(filteredCities);
  };
  
  populateCities(cities);


//let delawareCityDataArray = [];
// let cityData; 
// let cityNames;

// let cityNamesList = [];

// let buffer = [];

// let inputEntryField = document.getElementById("myInput");

// let infoCardClass = document.getElementsByClassName("infocard");
// let cities;

// // function keyStrokeSearch() {
// //     var inputEntry = document.getElementById("myInput").value;
// //     console.log(inputEntry)
// //   }

//  const keyStrokeSearch = () => {
//     var inputEntry = document.getElementById("myInput").value;
//     console.log(inputEntry)
//   }


//  function getdelawareCityData(){
//     $.ajax({
//         url: "https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/back4appDelawareDataEdited.JSON",
//         success: function(delawareCityDataUnparsed) {
            
//            let cityData = JSON.parse(delawareCityDataUnparsed)
//              for(let i=0;i < cityData.length; i++) {
//                 delawareCityDataArray.push(cityData[i])
//               }
//               console.log(cityData)
//               console.log(cityData);
              


              
//               const createResultsGrid = () => {
//                   cityList = cityData.results

//                 //   for (let i=0; i<cityList.length; i++) {
//                     cityList.forEach((city) => {
//                     let gridContainer = document.getElementById('maincontent')
//                     let infoCard = document.createElement('div')
//                         infoCard.classList.add('infoCard')
//                         infoCard.classList.add('text')
//                         gridContainer.appendChild(infoCard)
//                         console.log(infoCard);
//                         console.log(cityList);
//                         console.log(cityList[i].name);
//                         let cityNames = cityList[i].name;
//                         cityNamesList.push(cityNames);
                        

//                         let cityName = document.createElement('SPAN')
//                         cityName.innerHTML = cityList[i].name
//                         cityName.setAttribute("class", "citynamestyle");
//                         infoCard.appendChild(cityName);



//                   });
                       
                  
            
             
//              }
             
//              createResultsGrid();
//              console.log(cityNamesList);




//         }   
       
//      })
 
     
//     }

//     getdelawareCityData();


// document.addEventListener('DOMContentLoaded', () => {
//     'use strict';

    

//     document.addEventListener('keydown', event => {
//         const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
//         const key = event.key.toLowerCase();

//         if (charList.indexOf(key) === -1) return;

//         buffer.push(key);
//         console.log(buffer);
//         filterResults();
//     });

    

// });









// function clearArray(){
//     buffer = [];
// }

// function filterResults() {
//     filter = inputEntryField.value.toUpperCase();
//     // console.log(infoCardClass);

//     for (j = 0; j < cityNamesList.length; j++){
//         a = cityList[j].name[0]
//         console.log(a)

//         // txtValue = a.textContent || a.innerText;
//         firstLetterCityName = a;
//         // console.log(a[0]);

//         if (firstLetterCityName.toUpperCase().indexOf(filter) === true) {
//             // inputEntryField.style.display = "none";
//             console.log(a[0])

//         } else {
//             // infoCardClass.style.display = "none";
//             console.log("hey, this works!x2")
//         }
//     }

// }

// function filterCityName() {
   
//     }






// //map return a new array then add the entire thing to html

// //for each will iterate through the array like a for loop
// //for each is the way to go

// // const searchbar = document.getElementsByClassName("search")[0];

// //whenever the keyup event happens, run this function
// // searchbar.addEventListener('keyup', filterCities);

// // const filterCities = () => {
// //     cont searchTerm = documeny.getElementsByClassName("search")[0].value;
// //     filteredCities = cities.filter(city) => {
// //         return 
// //     }
// // }

// //you can also use "e"
// //you can really name it anything honestly... but be explicit and name it event

// // const filterCities = (event) => {
// //     const searchTer = event.target.value.toLowerCase();
// //     // cont searchTerm = documeny.getElementsByClassName("search")[0].value;
// //     filteredCities = cities.filter((city) => {
// //         //return true or falso
// //         return city.name.toLowerCase().includes(searchTerm);
// //     });

// //an implicit return....means you don't need to add the keyword return
// //syntactic sugat, something to make your code look better. 
// //pass in the filtered cities


// //     populateCities(fileteredCities);
// // }

// //hoisted, runs before anything else, const means its no longer 


