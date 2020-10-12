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
var dateInput = d3.select("#datetime")
var cityInput = d3.select("#city")

// locate button
var button = d3.select("#filter-btn")
// //select table 
var output = d3.select("#tbody")

//create event handlers
button.on("click", runEnter);
output.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

  
    // Get the value property of the input element
    var dateValue = dateInput.property("value");
    var cityValue = cityInput.property("value");
 
    
    console.log(dateValue)
    console.log(cityValue)
    var filteredData = tableData.filter(day => day.datetime === dateValue)
    // //insert date value into table
    ('select').on('change', function (e) {
        // Get the value of the select box
        var val = dateValue.val();
        // Show all the rows
        ('tbody tr').show();
        // If there is a value hide all the rows except the ones with a data-year of that value
        if (val) {
            ('tbody tr').not($('tbody tr[data-year="' + val + '"]')).hide();
        }
    });






    // *************************
    
   


    // button.on("click", function () {
    //     d3.select(".table table-stiped").text(filteredData)
    // });

}

// //select input
// var input = d3.select("#datetime")
// // locate button
// var button = d3.select("#filter-btn")
// // //select table 
// var output = d3.select("tbody")

// button.on("click", runEnter);
// output.on("submit", runEnter);
// function runEnter() {
//     d3.event.preventDefault();

//     //select input element 
//     var inputValue = input.property("value");
//     var filteredData = tableData.filter(day => day.datetime === inputValue)
//     output.text(filteredData)
    
// }