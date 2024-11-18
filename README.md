# Flight Finder

### Introduction

This React application allows users to find flights to selected locations based on departure date and return date.

- Users have an existing movie reservation.
- Movie listings are displayed and are available show dates.
- Reservations are connected to Users and Movie listings

### Installation Guide

- Clone this repository
- Run npm install to install all dependencies
- Create an .env file in your project root folder and add your BEARERTOKEN variable.

### Usage

- Use the guide link below for Amadeus to sign up for a API key and API secret
- With the API key and secret, you'll need to request for a BEARER token for the requests to work
- Run npm run dev: to start the application.

### Instructions

- After setting up the BEARER token in the .env file. You're able to select cities, dates and passengers to search for flights
- The page will redirect you to a list of avaliable flights with the necessary information such as Departure origin, departure date, departure duration, return origin, return date, return duration and price.

### Unsolved Problems

- The deployed web application does not fully work due to the BEARER token. It expires every 30 minutes, so the network requests fail unless the repo is cloned and supplied with the BEARER token.
- Upcoming change would be to display a My Trips page of the selected flights that the user chooses.

### Technologies Used

- [React](https://react.dev/)
- [Amadeus](https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335) This is the 3rd party API to retrive travel infomation.

### Authors

- [Kenneth Ho](https://github.com/hoken92/)
