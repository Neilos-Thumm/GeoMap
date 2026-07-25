# About this Project

I want to build a reflective and narrative photography gallery. This idea came from journal records I kept on every trip — places, timestamps, small observations — that never really had anywhere to go.

The goal is to bring those records to life in two ways. First, the photographs themselves, presented with the context that shaped them — what I was reading at the time, the historical weight of a place, the light that only happens once. Second, the data that sits underneath every trip: where I actually walked, how much ground a city visit covers, what time of day I tend to move. That side of it might be genuinely useful to someone planning their own visit to the same places.

The data only covers the last two years. My memory gets too fuzzy beyond that.

___
### Location Data
I took some time off to convert the location data of places I've been to into exact coordinates via Google Maps, and filled out the data into a .base file in Obsidian with appropriate information alongside it.

The data only cover the last 2 years since my memory is getting too fuzzy for more than that.

<img src="images/Rawdata.png">

These data then can be plot using a "View" feature (the way Obsidian display .base's data in graphical format) using the "MapView"  plugin. I won't get too much into detail since only the raw data is needed for this website implementation, and the MapView is used only to get a rough understanding of the Leaflet look.

refer to more information here, if you're interested: https://obsidian.md/help/bases/views/map

<img src="images/Mapviewplugin.png">


And for the final step, since the Leaflet.js library uses the exact same format as Obsidian's MapView did, it's now only the matter of converting .csv (from .base) to a Javascript array and implement it using leaflet.js

<img src="images/Leaflet.png">

___
### Location Analysis

Four dedicated analytical pages were built on top of the core location dataset, each exploring a different dimension of the travel data.

**Explore (route-analysis.html)**  
Chronological daily routes traced on real street networks. Uses the OSRM public routing API (`/route/v1/foot/`) to fetch actual walking paths between stops, rendered as Leaflet polylines. Falls back to straight-line connections when OSRM cannot route (e.g. remote terrain). Stops are colour-coded by type (landmark, restaurant, hotel, etc.) and the sidebar shows a timeline with per-stop timestamps.

**Footprint (city-footprint.html)**  
A geographic spread analysis across all visited cities. Computes a convex hull per city from stop coordinates to visualise the spatial footprint of each visit as a filled polygon on the map. Cities are grouped by country with dot-density markers; sidebar shows stop counts, type breakdowns, and country tallies.

**Rhythm (temporal-rhythm.html)**  
A 24-hour polar clock chart built entirely in SVG (no chart library). Each of the 76 travel stops is plotted as a dot at its time-of-day angle on a 24-hour clock face, with radial position encoding minutes-within-the-hour. Day/night zones are shaded using annular arc paths. Clicking a type in the legend spotlights those stops and dims all others. A country rhythm panel shows the average hour of first activity per country.

**Reach (hotel-reach.html)**  
Isochrone-style walking reach from each city's hotel. Draws four concentric walking-time rings (10 / 20 / 30 / 45 min) on the map using a walking speed constant of 80 m/min. A single OSRM table request (`/table/v1/foot/`) fetches walking times from the hotel to all stops in one call; null values (unroutable terrain) fall back to haversine straight-line estimation. Clicking a stop marker or sidebar row fires a second OSRM route request to draw the actual walking path for that pair. Stops are colour-coded by which time ring they fall within.

**Key tools and APIs used across all four pages:**
- [Leaflet.js](https://leafletjs.com/) — interactive map rendering (CartoDB Positron tiles)
- [OSRM public API](https://router.project-osrm.org/) — walking route geometry and travel-time matrix
- Haversine formula — straight-line distance fallback for unroutable stops
- Native SVG via `document.createElementNS` — polar clock chart (no external charting library)
- Polar coordinate math — `(h + m/60) / 24 × 2π − π/2` maps timestamps onto a 24-hour clock face

# Reference

## Library and Syntax
stock images: https://www.google.com/
Leaflet Documents: https://leafletjs.com/  
Leaflet popups: https://leafletjs.com/index.html  
Declaring Map in Leaflet: https://leafletjs.com/reference.html#map-example
Flexbox: https://www.w3schools.com/css/css3_flexbox.asp
Loop in JS: https://www.w3schools.com/js/js_loops.asp

