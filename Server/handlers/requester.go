package handlers

import (
	"fmt"
	"github.com/gorilla/mux"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
)

var ROOT_DIR string = "./posts/"
var POST_MAP map[int]string
var RETURN_COUNT int = 5
var ID_STR_LEN int = 4

var largestId int = 0
var smallestId int = 0

func readFile(filename string) string {
	fmt.Println("Printing: " + filename)

	content, err := ioutil.ReadFile(filename)
	if err != nil {
		return ""
	}

	return string(content)
	//	fmt.Printf("File contents: %q", content)
}

func SetupData() {
	POST_MAP = make(map[int]string)
	files, err := ioutil.ReadDir(ROOT_DIR)
	if err != nil {
		return
	}

	for _, file := range files {
		var sb strings.Builder

		strName := file.Name()
		if len(strName) < ID_STR_LEN+1 {
			continue
		}

		fileId, err := strconv.Atoi(strName[:ID_STR_LEN])
		if err != nil {
			continue
		}

		sb.WriteString(strName[:ID_STR_LEN])
		sb.WriteByte('\000')
		sb.WriteString(strName[ID_STR_LEN:])
		sb.WriteByte('\000')
		sb.WriteString(readFile(ROOT_DIR + strName))
		sb.WriteByte('\000')

		if smallestId == 0 || fileId < smallestId {
			smallestId = fileId
		}

		if largestId == 0 || fileId > largestId {
			largestId = fileId
		}

		POST_MAP[fileId] = sb.String()

		fmt.Printf("sb: %q\n", sb.String())
	}
}

func GetNext(fromID int) (string, int) {
	var exists bool
	var strVal string
	for fromID > 0 {
		strVal, exists = POST_MAP[fromID]
		if exists {
			return strVal, fromID
		}

		fromID -= 1
	}

	return "0000", 0
}

func InitRequest(w http.ResponseWriter, r *http.Request) {
	var nextDataID int
	nextDataID = largestId

	var payload string
	var sb strings.Builder

	stepper := 0
	for stepper < RETURN_COUNT {
		payload, nextDataID = GetNext(nextDataID)
		sb.WriteString(payload)
		fmt.Fprintf(w, payload)
		if nextDataID == 0 {
			return
		}

		nextDataID -= 1
		stepper += 1
	}

	//fmt.Fprintf(w, "Init Request Test\n")
}

func NewRequestUsage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Usage: /request/new/{last received Id}\n")
}

func NewRequest(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	idStr := vars["lastId"]

	nextDataID, err := strconv.Atoi(idStr)
	if err != nil {
		fmt.Printf("Error: Invalid ID")
		return
	}

	var payload string
	var sb strings.Builder

	stepper := 0
	for stepper < RETURN_COUNT {
		payload, nextDataID = GetNext(nextDataID)
		sb.WriteString(payload)
		fmt.Fprintf(w, payload)
		if nextDataID == 0 {
			return
		}

		nextDataID -= 1
		stepper += 1
	}

	//fmt.Fprintf(w, "New Request Test id=%s\n", idStr)
}
