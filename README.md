# Restaurant Reviews App - Stage 1
---
## Overview

**Restaurant Reviews App - Stage 1** is a project that is part of the Udacity Front End Nanodegree program. The project requires transforming a basic website into responsive and accessible website. The project also dives into service workers and their ability to cache resources to aid in producing an offline first web application.

---
## Installation

Ensure that you have a way to start up a simple HTTP server to serve up the site files on your local computer.

  * Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000`. For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

  * An alternative option to Python is to use Web Server for Chrome, which can be downloaded [here](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en).

---
## Usage

1. Download the project as a .zip file, and unzip it at a location of your choice.

2. **cd** into the project directory. Start up your web server within this project directory.

3. With your server running, visit the site: **http://localhost:8000**, and look around for a bit to see what the current experience looks like. Note that you can use ports other than 8000, but the server needs to be configured to the particular port, and the port needs to be updated in `dbhelper.js`.

4. Explore the different restaurant listings by filtering by neighborhood and cuisine type.

5. Click on the "View Details" button of a particular restaurant to see review details. You may also click on a location marker on the interactive leaflet map to view the review details of a particular restaurant.

---
## External Resources

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.