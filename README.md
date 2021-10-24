# leaflet-challenge

![1-Logo.png](leaflet-step-1/Images/1-Logo.png)

## In this repository we visualize earthquake and tectonic plates data set on the map. 

There are 3 layers of basemaps, satellite, outdoor and greyscale that can be turned on and off independently. 

To build the visualisations, we use USGS earthquake data set. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example "All Earthquakes from the Past 7 Days", you will be given a JSON representation of that data. 

1. We create a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

2. The data markers reflect the magnitude of the earthquake by their size and and depth of the earthquake by colour. Earthquakes with higher magnitudes appear larger and earthquakes with greater depth appear darker in color.

3. There are also popups that provide additional information about the earthquake when a marker is clicked.

4. Also added a legend that provides context for the map data.

5. The tectonic plates appear on the map in the form of orange line. The dataset is pulled from <https://github.com/fraxen/tectonicplates>.


