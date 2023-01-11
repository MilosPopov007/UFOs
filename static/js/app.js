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

// Add Filters
// Data-Driven Documents (D3 for short) is a JavaScript library that adds interactive functionality, such as when users click a button to filter a table
// We'll need to add a second function to our code that will focus on filtering the table we just built
// Since we're adding a date function, we need to create a couple of variables to hold our date data, both filtered and unfiltered
function handleClick() {
    let date = d3.select("#datetime").property("value");
// The .select() function is a very common one used in D3. It will select the very first element that matches our selector string: "#datetime"
//  The selector string is the item we're telling D3.js to look for.
// With d3.select("#datetime"), for example, we're telling D3 to look for the #datetime id in the HTML tags
// By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored on the webpage,
//  but to actually grab that information and hold it in the "date" variable.

// Now we need to set a default filter and save it to a new variable.
// Our default filter will actually be the original table data because we want users to refine their search on their own terms
let filteredData = tableData;
//  By setting the filteredData variable to our raw data, we're basically using it as a blank slate
// The function we're working on right now will be run each time the filter button is clicked on the website
//  If no date has been entered as a filter, then all of the data will be returned instead

// Use the “If” Statement
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };
// We’re applying a filter method that will match the datetime value to the filtered date value.
// Our handleClick() function tells the code what to do when an event occurs (such as someone clicking a filter button), and it can apply that filtered data using an if statement

// Build the Filtered Table

// Thankfully, we've already set up a function to build a table: buildTable();. Now we just need to call it
// We're building the function with the filtered data, so we'll use that variable as our argument
buildTable(filteredData);
};

// Listen for the Event
// Another aspect of D3.js is that it can listen for events that occur on a webpage, such as a button click
// The next code we add will be tied to the filter button we'll build on our webpage
d3.selectAll("#filter-btn").on("click", handleClick);
// Our selector string contains the id for another HTML tag
// (We'll assign a unique id to a button element in the HTML called "filter-btn"
//  By adding this, we're linking our code directly to the filter button
// Also, by adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked

// Build the Final Table
// There is only a single step left before we can build the HTML component of the webpage: making sure the table loads as soon as the page does
// At the very end of the code, we'll call our buildTable function once more—this time using the original data we've imported
// Once this function is called, it will create a basic table filled with row upon row of unfiltered data pulled straight from our array
buildTable(tableData);