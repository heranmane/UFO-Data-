// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body

function showTable(ufo) {
    var tbody = d3.select("tbody");

    // // Step 1: Loop Through `data` and console.log each weather report object
    ufo.forEach(function (dict) {
        console.log(dict)
        var row = tbody.append("tr")
        Object.entries(dict).forEach(function ([key, value]) {
            console.log(value)
            var cell = row.append("td")
            cell.text(value)
        })
    })
}

showTable(tableData)



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

    // // //filter and insert date value into table
    var filteredDate = tableData.filter(day => day.datetime === dateValue)
    console.log(filteredDate)
    var filteredCity = tableData.filter(city => city.city === cityValue)
    // console.log(filteredCity)
    var filteredState = tableData.filter(state => state.state === stateValue)
    // console.log(filteredCity)
    var filteredCountry = tableData.filter(country => country.country === countryValue)
    // console.log(filteredCity)
    var filteredShape = tableData.filter(shape => shape.shape === shapeValue)


    showTable(filteredCity)
    showTable(filteredDate)
    showTable(filteredState)
    showTable(filteredCountry)
    showTable(filteredShape)

    if (dateInput = "") {
         showtable(filteredDate)
    }else {tableData}

    // Filter on date
//     if (dateInput != "") {
//         var filteredDate = tableData.filter(day => day.datetime === dateValue);
//         return showtable(filteredDate)
//     ;
// } else { tableData };
    
// if (stateValue!= "") {
//     tableData = tableData.filter(function (address) {
//         var addressState = address.state;
//         return addressState === filterState;
//     });
// }
// else { tableData };

// // Filter on city
// if (filterCity != "") {
//     tableData = tableData.filter(function (address) {
//         var addressCity = address.city;
//         return addressCity === filterCity;
//     });
// }
// else { tableData };

// // Filter on country
// if (filterCountry != "") {
//     tableData = tableData.filter(function (address) {
//         var addressCountry = address.country;
//         return addressCountry === filterCountry;
//     });
// }
// else { tableData };

// // Filter on shape
// if (filterShape != "") {
//     tableData = tableData.filter(function (address) {
//         var addressShape = address.shape;
//         return addressShape === filterShape;
//     });
// }
// else { tableData };

showTable();
}
