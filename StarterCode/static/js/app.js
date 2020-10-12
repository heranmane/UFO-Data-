// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// // Step 1: Loop Through `data` and console.log each weather report object
tableData.forEach(function (dict) {
    console.log(dict)
    var row = tbody.append("tr")
    Object.entries(dict).forEach(function ([key, value]) {
        console.log(value)
        var cell = row.append("td")
        cell.text(value)
    })
})

//select input
var inputValue=d3.select("#datetime")
// locate button
var button = d3.select("#filter-btn")
// //select table 
var table = d3.select("#table table-striped")
// //create event handlers
button.on("click", runEnter);
table.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement= d3.select(".form-control");
    // Get the value property of the input element
    var inputDate= inputElement.property("value");
   console.log(inputDate)
    //insert date value into table
    var filteredData = tableData.filter(day => day.datetime === inputDate)
    console.log(filteredData)
    newTable= table.text(filteredData)
}

button.on("click",runEnter)