let delawareCityDataArray = [];
let cityData; 
let cityNames;

let cityNamesList = [];

let buffer = [];

let inputEntryField = document.getElementById("myInput");

let infoCardClass = document.getElementsByClassName("infocard");


function keyStrokeSearch() {
    var inputEntry = document.getElementById("myInput").value;
    console.log(inputEntry)
  }

  

 function getdelawareCityData(){
    $.ajax({
        url: "https://raw.githubusercontent.com/Amberroseweeks/JSIIIHW1/main/back4appDelawareDataEdited.JSON",
        success: function(delawareCityDataUnparsed) {
            
           let cityData = JSON.parse(delawareCityDataUnparsed)
             for(let i=0;i < cityData.length; i++) {
                delawareCityDataArray.push(cityData[i])
              }
              console.log(cityData)
              console.log(cityData);
              

              function createResultsGrid (){
                  cityList = cityData.results
                  for (let i=0; i<cityList.length; i++) {
                    let gridContainer = document.getElementById('maincontent')
                    let infoCard = document.createElement('div')
                        infoCard.classList.add('infoCard')
                        infoCard.classList.add('text')
                        gridContainer.appendChild(infoCard)
                        console.log(infoCard);
                        console.log(cityList);
                        console.log(cityList[i].name);
                        let cityNames = cityList[i].name;
                        cityNamesList.push(cityNames);
                        

                        let cityName = document.createElement('SPAN')
                        cityName.innerHTML = cityList[i].name
                        cityName.setAttribute("class", "citynamestyle");
                        infoCard.appendChild(cityName);



                  }
                       
                  
            
             
             }
             
             createResultsGrid();
             console.log(cityNamesList);




        }   
       
     })
 
     
    }

    getdelawareCityData();


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    

    document.addEventListener('keydown', event => {
        const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const key = event.key.toLowerCase();

        if (charList.indexOf(key) === -1) return;

        buffer.push(key);
        console.log(buffer);
        filterResults();
    });

    

});


function clearArray(){
    buffer = [];
}

function filterResults() {
    filter = inputEntryField.value.toUpperCase();
    // console.log(infoCardClass);

    for (j = 0; j < cityNamesList.length; j++){
        a = cityNamesList[j]

        // txtValue = a.textContent || a.innerText;
        firstLetterCityName = a[0];
        // console.log(a[0]);

        if (firstLetterCityName.toUpperCase().indexOf(filter) > -1) {
            inputEntryField.style.display = "none";
            console.log("hey, this works!")

        } else {
            // infoCardClass.style.display = "none";
            console.log("hey, this works!x2")
        }
    }

}

function filterCityName() {
   
    }






