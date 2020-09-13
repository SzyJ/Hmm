package handlers

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

func InitRequest(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Init Request Test\n")
}

func NewRequestUsage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Usage: /request/new/{last received Id}\n")
}

func NewRequest(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	idStr := vars["lastId"]

	fmt.Fprintf(w, "New Request Test id=%s\n", idStr)
}
