# Papal Intentions API
Get the Holy Father's Intentions for a given month in convenient JSON format. Made to gain experience with NodeJS, Heroku, Insomnia and OpenAPI 3. 

## Server
The server is currently deployed via Heroku @ `https://papal-intentions-api.herokuapp.com/`.

To run your own server, clone this repo and run `npm start`. The server runs on the port given in the `PORT` environment variable, or `8080` by default.

## Client
### Documentation Website
Read the full docs [here](https://plabick.github.io/Papal-Intentions-API/)
### The Basics
#### Request
A Request must contain a year and a month.
``` REST
get https://papal-intentions-api.herokuapp.com/{year}/{month}
```
```REST
get https://papal-intentions-api.herokuapp.com/2020/june
```
### Response
All responses have the following form
```
{
	"title": string,
	"message": string
}
```

#### Success (200)
```
{
	"title": "Human Fraternity",
	"message": "May the Lord give us the grace to live in full fellowship with our brothers and sisters of other religions, praying for one another, open to all."
}
```
#### Failure (404)
``` 
{
	"title": "Error",
	"message": "No data for the given year"
}
```
## Put Requests
Papal intentions can only be changed by the Pope. As such, your put requests are only suggestions. They may be sent in writing to the Holy Father at the following address
```
 His Holiness, Pope Francis
 Apostolic Palace
 00120 Vatican City
```
## Delete Requests
Delete requests are considered heresy.
