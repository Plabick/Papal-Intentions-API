# Papal Intentions API
Get the Holy Father's Intentions for a given month in convenient JSON format. Made to gain experience with NodeJS Express, Insomnia and OpenAPI 3. 

## Running the Server
Clone this repo and run `npm start`. The server runs on the port given in the PORT environment variable, or `8080`.

## Usage
### Documentation Website
Read the full docs [here](https://plabick.github.io/Papal-Intentions-API/)
### The Basics
#### Request
``` REST
get SERVER/{year}/}{month}
```
```REST
get SERVER/2020/june
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
Put requests must be sent in writing to the Holy Father at the following adress
```
 His Holiness, Pope Francis
 Apostolic Palace
 00120 Vatican City
```
## Delete Requests
Delete requests are considered heresy 
