# UFOs
Creating a Dynamic Web Page using the JavaScript programming language with UFOs table data, that will react to user input and customizing HTML file with CSS Bootstrap for easy viewing


## Results:

The main goal of this project is to create an interactive webpage that allows readers to parse the data around UFO sightings. In order to do that I built the web page that will allow users to view the data (HTML) and a dynamic table that will present it (JavaScript).

In a first step the storyboard was created as a kind of blueprint for the website and JavaScript code follows along by importing the data and then referencing it with a variable.

To display our data in the table D3 JavaScript library was used. D3 library produces sophisticated and highly dynamic graphics in an HTML webpage. It is often used by data professionals to create dashboards, or a collection of visual data (such as graphs and maps), for presentation.

The array containing UFO sightings is quite significant. To provide a more in-depth analysis of UFO sightings JavaScript functions were used to allow users to filter multiple criteria at the same time. In addition to the date, table search filters were created for the city, state, country, and shape of UFO objects.



![This is an image](https://github.com/MilosPopov007/UFOs/blob/main/Web_page.png)



Each element in [HTML](https://github.com/MilosPopov007/UFOs/blob/main/index.html) file will have the same "id" as the object properties in the data.js file. We'll create a new function that saves the element, value, and id of the filter that was changed. Filters will be updated on user input.


![This is an image](https://github.com/MilosPopov007/UFOs/blob/main/Filters_HTML.png)

In the [app.js](https://github.com/MilosPopov007/UFOs/blob/main/static/js/app.js) JavaScript file all necessary steps are taken to link our [data](https://github.com/MilosPopov007/UFOs/blob/main/static/js/data.js) to the [HTML](https://github.com/MilosPopov007/UFOs/blob/main/index.html) file.

BuildTable function was called to create the Table, loop was used to append values (into our Table) of the data object and filter function to update the Table on user input.


![This is an image](https://github.com/MilosPopov007/UFOs/blob/main/Java_png1.png)


