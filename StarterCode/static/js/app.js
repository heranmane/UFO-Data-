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


    console.log(dateValue)
    console.log(cityValue)

    // //filter and insert date value into table
    var filteredDate = tableData.filter(day => day.datetime === dateValue)
    // console.log(filteredData)
    var filteredCity = tableData.filter(city => city.city === cityValue)
    // console.log(filteredCity)
    var filteredState = tableData.filter(state => state.state === stateValue)


    showTable(filteredCity)
    showTable(filteredDate)
    showTable(filteredState)

}

output.on("change", showTable);
