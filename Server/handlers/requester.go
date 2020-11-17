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
		if len(strName) < 4 {
			continue
		}

		fileId, err := strconv.Atoi(strName[:3])
		if err != nil {
			continue
		}

		sb.WriteString(strName[:3])
		sb.WriteByte('\000')
		sb.WriteString(strName[3:])
		sb.WriteByte('\000')
		sb.WriteString(readFile(ROOT_DIR + strName))

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

	return "000", 0
}

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
