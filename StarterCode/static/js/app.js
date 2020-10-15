// from data.js
var tData = data;

// YOUR CODE HERE!
// Get a reference to the table body

function showTable(ufo) {
    var tbody = d3.select("tbody");

    // // Step 1: Loop Through `data` and console.log each weather report object
    ufo.forEach(function (dict) {
        // console.log(dict)
        var row = tbody.append("tr")
        Object.entries(dict).forEach(function ([key, value]) {
            // console.log(value)
            var cell = row.append("td")
            cell.text(value)
        })
    })
}

showTable(tData)



//select all inputs
var dateInput = d3.select("#datetime")
var cityInput = d3.select("#city")
var stateInput = d3.select("#state")
var countryInput = d3.select("#country")
var shapeInput = d3.select("#shape")

// locate button
var button = d3.select("#filter-btn")
// //select table 
var output = d3.select("#tbody")

//create event handlers
button.on("click", runEnter);


function runEnter() {
    d3.event.preventDefault();
    d3.select("tbody").html("")


    // Get the value property of the input element
    var dateValue = dateInput.property("value");
    var cityValue = cityInput.property("value");
    var stateValue = stateInput.property("value");
    var countryValue = countryInput.property("value");
    var shapeValue = shapeInput.property("value");


    console.log(dateValue)
    console.log(cityValue)
    console.log(countryValue)
    console.log(shapeValue)

    tableData = data
    
    // //filter and insert date value into table
    if (dateValue !== "") {
        tableData = tableData.filter(day => day.datetime === dateValue)

    } 

    // console.log(filteredData)
    if (cityValue !== "") {
        tableData = tableData.filter(city => city.city === cityValue)
    } 

    if (stateValue !== "") {
        tableData = tableData.filter(state => state.state === stateValue)

    } 

    if (countryValue !== "") {
        tableData = tableData.filter(country => country.country === countryValue)
    } 

    if (shapeValue !== "") {
        tableData = tableData.filter(shape => shape.shape === shapeValue)

    } 
  

    showTable(tableData)
 
    


}

