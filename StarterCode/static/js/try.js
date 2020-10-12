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

//select all inputs
// var dateInput = d3.select("#datetime")
// console.log(dateInput.property("value"))

// var cityInput = d3.select("#city")
// console.log(cityInput.property("value"))

// table_search(search,tr,indexSearch='0')
2
$('#input').keyup(function () {
    3
    table_search($('#input').val(), $('#table tbody tr'), '012');
    4
});
