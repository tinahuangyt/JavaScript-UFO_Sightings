
// load data into table from data.js

var tableData = data;

var tbody = d3.select("tbody");

function displayData(data){
    tbody.text("");
    data.forEach(function(sighting){
    var newRow = tbody.append("tr");
    Object.entries(sighting).forEach(function([key,value]){
        console.log(key, value);
        var newCol = newRow.append("td").text(value);
    });
})};


// Select input
var submit = d3.select("#submit");

submit.on("click", function(){
    d3.event.preventDefault();

    var inputElement = d3.select("#example-form-input");
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);

    var filteredData = tableData.filter(value => value.datetime === inputValue);
    console.log(filteredData); 
    displayData(filteredData);
});



