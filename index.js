let delawareCityDataArray = [];
let cityData; 
let cityNames;

let cityNamesList = [];

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






