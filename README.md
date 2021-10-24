# leaflet-challenge

![1-Logo](Images/1-Logo.png)

In this repository we visualize earthquake and tectonic plates data set on the map. 

![2-BasicMap](Images/2-BasicMap.png)

There are 3 layers of basemaps, satellite, outdoor and greyscale that can turned on and off independently. 

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example "All Earthquakes from the Past 7 Days", you will be given a JSON representation of that data. 

Create a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

The data markers reflect the magnitude of the earthquake by their size and and depth of the earthquake by color. Earthquakes with higher magnitudes appear larger and earthquakes with greater depth appear darker in color.

There are also popups that provide additional information about the earthquake when a marker is clicked.

There is a legend that provides context for the map data.

The tectonic plates appear on the map in the form of orange line. The dataset is pulled from <https://github.com/fraxen/tectonicplates>.


