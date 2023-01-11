// import the data from data.js
const tableData = data;

// We need to point our data to our HTML page. Specifically, we need to tell JavaScript what type of element the data will be displayed in
// We already know that the data will be displayed in a table, so in our code editor we'll reference the tbody HTML tag using D3.
// D3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage.
//  It is often used by data professionals to create dashboards, or a collection of visual data (such as graphs and maps), for presentation.

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// With this code, we: Declare a variable tbody,  Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML

// Typically, functions are named after what they do. We're building a table, so we'll name the function "buildTable."
// We'll also pass in "data" as the argument. We used the variable "data" earlier to import our array of UFO sightings

function buildTable(data) {
    tbody.html("");
  }
// The line we'll use to clear the data is tbody.html("");   If we didn't clear existing data first, then we would find ourselves reinserting data that already exists,
// thus creating duplicates and making a bit of a mess. Clearing the existing data creates a fresh table in which we can insert data
// tbody.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build.
// The parentheses with empty quotes (("");) is an empty string.
// Basically, this entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; in other words, create a blank canvas.
//  This is a standard way to clear data.

// Add the forEach Function
data.forEach((dataRow) => {

});
//  We're using an arrow function here because it's a cleaner way to write a forEach loop, a traditional for loop—the code would behave in the exact same manner
// With this new function, we have essentially chained a for loop to our data.
//  We also added an argument (dataRow) that will represent each row of the data as we iterate through the array

let row = tbody.append("tr");
// Notice that we're using let instead of var to declare the row variable. That's because this variable is limited to just this block of code
//  It's more appropriate to use var when we want the variable to be available globally, or throughout all of the code.
// This single line of code is doing a lot. It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
//  Each object, or UFO sighting, in the array will be wrapped in a <tr> tag.

data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

  // By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings
  //  By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow
  //  We've added forEach((val) to specify that we want one object per row.
  // We're telling our code put each sighting onto its own row of data. The val argument represents each item in the object, such as the location, shape, or duration.
  //  In our editor, the next few lines of code will go inside our new function
  // With this line, we've set up the action of appending data into a table data tag (<td>)
  // Now, in the next line we'll add the values.

//  With this function, we have done the following:
//     Looped through each object in the array
//     Appended a row to the HTML table
//     Added each value from the object into a cell