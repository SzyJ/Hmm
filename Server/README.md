# Hmm Backend
Go server for returning relevant posts to requester

## Currently supported calls
- ```/request/init``` Get the first batch of posts
- ```/request/next/{last_received_id}``` Get the next batch of posts from the given ID

## To compile and run yourself
1. Setup the GoLang environment ([docs](https://golang.org/doc/install))
2. Get [gorilla/mux](https://github.com/gorilla/mux) ```go get -u github.com/gorilla/mux```
3. Clone this repo ```git clone https://github.com/SzyJ/Hmm```
4. Build and run server on localhost ```go run ./Server/main.go```
