# travel_back
backend of travel app

This App is a fullstack MERN application with a model with full CRUD.

The backend is connected to MongoDB Atlas. All the routes were tested with Postman.

both ends of this project are connected to and deployed through heroku

The front end of this app has and .env file that protects teh google maps api key

the stretch of this project was incorporating an external API. In this case the google maps api to be able to add the travel cards front he data base as markers on the map.

I attempted creating markers dynamically with the information of each card (which included the latitude and longitude of each location) but was unabel to figure out a way to map over the locations to create the markers.

I had to manually include the locations and makers to call on the locations withing the app.js

in the future i would like to work on separating things into components to clean up the app.js. figure out how to dynamically add the cards as markers on the google map and create drop down menu to search for things by continent or rating or place to stay category.

the style was done with vanilla css and the stretch was to incorporate bootstrap or tailwind.


