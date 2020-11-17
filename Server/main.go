package main

import (
	"./handlers"
	"fmt"
	//	"github.com/gorilla/mux"
	//	"net/http"
	"os"
	"strconv"
)

var DEFAULT_PORT string = "8090"

func getValidPort() string {
	var port string
	arguments := os.Args[1:]

	if len(arguments) == 0 {
		port = DEFAULT_PORT
	} else {
		port = arguments[0]
		validPort, err := strconv.Atoi(port)

		if err != nil || validPort < 1 || validPort > 65535 {
			fmt.Println("Invalid port received. Using default.")
			port = DEFAULT_PORT
		}
	}

	return port
}

func main() {

	handlers.SetupData()
	//	port := getValidPort()
	//
	//	router := mux.NewRouter().StrictSlash(true)
	//
	//	router.HandleFunc("/request/init", handlers.InitRequest)
	//	router.HandleFunc("/request/new", handlers.NewRequestUsage)
	//	router.HandleFunc("/request/new/{lastId}", handlers.NewRequest)
	//
	//	fmt.Print("Server started on port " + port + "...")
	//
	//	log.Fatal(http.ListenAndServe(":"+port, router))
}
