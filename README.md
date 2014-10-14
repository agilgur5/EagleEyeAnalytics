FreeFlightAnalytics-Recording
=============================

Dashboard here: [FreeFlightAnalytics-Dashboard] (https://github.com/agilgur5/FreeFlightAnalytics-Dashboard) <br /> 
Sample Backend here: [FreeFlightAnalytics-Backend] (https://github.com/ajm339/FreeFlightAnalytics-Backend) <br />

Description
=============================

FreeFlight is the beginning of a modular, open source analytics platform that aims to bring open source recording and visualization technology to the analytics world. In the current market, start ups and bigger companies alike have 3 practical options: 1) create an in-house, closed source platform, 2) pay for one or several services, 3) a combination of free services (e.g. Google Analytics). All of these options take either significant time or money, and the latter 2 require to use a variety of sites that will have access to your data and will end up recording similar metrics in largely differing ways. <br />

FreeFlight is a transparent, community supported platform that allows plug and play open source recording with a simple backend and a unified dashboard, both of which can be easily integrated into an already existing analytics stack, or instantly booted up using an example app, providing any company with either a huge starting point or huge leap for their own analytics. Each recording and visualization is meant to work largely independently with only a few seconds spent on routing to provide significant modularity. <br />

The platform's first product uses GIFs to provide Session Playback of any user visiting the site. This allows developers to see exactly how each individual user utilizes their site,  helping them to make decisions and UX improvements based on exact user interactions. <br />

Installation
============================
The example analytics app can be found in the back end link and can be booted up instantly to serve as an analytics back end (our launch page is it's initial URL, feel free to delete all those assets). <br />

The recording script for GIF playback can be found here, place freeflightanalytics.screenrecording.js into your front end (with its dependencies, freeflightanalytics.routemap.js, freeflightanalytics.screenshot.js, html2canvas, and jQuery) and run the single function in screenrecording when you want to use it on your site, passing in the length of time and the delay between frames. <br />

The dashboard visualization can be found in the dashboard link and is part of the sample back end. This is currently incomplete
