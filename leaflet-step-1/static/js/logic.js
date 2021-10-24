// define greymap layer
var graymap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1Ijoic2VyZGFyYmF5cmFtb3YiLCJhIjoiY2t2MWhkaGJvM285NTMwczdsMGVob251YyJ9.6tZNK1MmIS0Kn9IBmC_IpQ");

// define satellitemap layer
var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1Ijoic2VyZGFyYmF5cmFtb3YiLCJhIjoiY2t2MWhkaGJvM285NTMwczdsMGVob251YyJ9.6tZNK1MmIS0Kn9IBmC_IpQ");

// define outdoors layer.
var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1Ijoic2VyZGFyYmF5cmFtb3YiLCJhIjoiY2t2MWhkaGJvM285NTMwczdsMGVob251YyJ9.6tZNK1MmIS0Kn9IBmC_IpQ");

  // define a map
    var map = L.map("mapid", {
      center: [40, -100],
      zoom: 4,
    });

// define two layer groups
var tectonicplates = new L.LayerGroup();
var earthquakes = new L.LayerGroup();

// create urls to make connection with datasets
var earthquakesUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
var platesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"

// create basemap and overlaymaps
var baseMaps = {"Satellite": satellitemap, "Greysclale": graymap, "Outdooor": outdoors}
var overlayMaps = {"Tectonic Plates": tectonicplates, "Earthquakes": earthquakes}

// add layers to the map
L.control.layers(baseMaps, overlayMaps).addTo(map)

// make satellitemap as a default to appear when the page is opened
satellitemap.addTo(map)

// use d3 json function to pull the data and console log to check 
d3.json(earthquakesUrl).then(function(earthquake) {
  data = earthquake.features
  console.log(data)

// function to store the colors
  function getColour(mag) {
    if (mag > 5) {
      return "#FF4500"
    } else if (mag > 4) {
      return "#FF6347"
    } else if (mag > 3) {
      return "#FF8C00"
    } else if (mag > 2) {
      return "#FF7F50"
    } else if (mag > 1) {
      return "#FF6347"
    } else {
      return "#FFA500"
    }
  };

// function to get depth to define radius of earthquake markers
  function getDepth(mag) {
    return (mag/10) 
  };

// function to make the earthquake circles appear
  function circlemarker(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColour(feature.properties.mag),
      color: "black",
      radius: getDepth(feature.geometry.coordinates[2]),
      stroke: true,
      weight: 0.5
    };
  }
    // adding geoJSON layer to the map
    L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
      },
      style: circlemarker,
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
      }
  
    }).addTo(earthquakes).addTo(map);
    var legend = L.control({
      position: "bottomright"
    });
  
    // add legend 
    var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = ['<strong>Categories</strong>'],
    categ = [ 1,2,3,4,5];
    var colors = ["#FFA500","#FF8C00","#FF7F50","#FF6347","#FF4500"];

    for (var i = 0; i < categ.length; i++) {

            div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            categ[i] + (categ[i + 1] ? '&ndash;' + categ[i + 1] + '<br>' : '+');

        }
        
    return div;
    };
    legend.addTo(map);
  
    // add tectonic plates to the map.
  })

    d3.json(platesUrl).then(function(tectonics) {
      platedata = tectonics.features
      // console.log(platedata)
         
        L.geoJson(platedata, {
          color: "yellow",
          weight: 2
        })
        .addTo(tectonicplates);
  
        tectonicplates.addTo(map);
      });
    
  

