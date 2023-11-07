package main

import (
	"database/sql"
	"errors"
	"fmt"
	"net/http"
	"regexp"
	"strings"
	"unicode"

	"golang.org/x/crypto/bcrypt"
)

var (
	validCharacters = regexp.MustCompile(`^\w+$`)
)

func validateUserName(name string) (bool, string) {
	length := len(name)
	invalid := false
	message := ""

	if length < 3 {
		message += "<div>username to short</div>"
		invalid = true
	}

	if length > 16 {
		message += "<div>username to long</div>"
		invalid = true
	}

	if !validCharacters.MatchString(name) {
		message += "<div>username can only contain letters, digits, and underscores</div>"
		invalid = true
	}

	return !invalid, message
}

func validatePassword(password string) (bool, string) {
	length := len(password)
	invalid := false
	message := ""

	hasUpper := false
	hasLower := false
	hasNumber := false
	hasSpecial := false

	if length < 8 {
		message += "<div>password is to short</div>"
		invalid = true
	}

	for _, char := range password {
		switch {
		case unicode.IsUpper(char):
			hasUpper = true
		case unicode.IsLower(char):
			hasLower = true
		case unicode.IsDigit(char):
			hasNumber = true
		case unicode.IsPunct(char) || unicode.IsSymbol(char):
			hasSpecial = true
		}
	}

	if !hasUpper {
		message += "<div>password must include at least one uppercase letter</div>"
		invalid = true
	}
	if !hasLower {
		message += "<div>password must include at least one lowercase letter</div>"
		invalid = true
	}
	if !hasNumber {
		message += "<div>password must include at least one number</div>"
		invalid = true
	}
	if !hasSpecial {
		message += "<div>password must include at least one special character</div>"
		invalid = true
	}

	return !invalid, message
}

// writes the login error to the response writer this is used in endpoints with htmx for swapping the errors in the dom
func writeLoginErrorMessage(w http.ResponseWriter, message string) {
	if message == "" {
		w.Write([]byte("<div id=\"login-error\" style=\"display: none;\"></div>"))
		return
	}

	w.Write([]byte("<div id=\"login-error\">" + message + "</div>"))
}

func login(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	username := r.Form.Get("username")
	password := r.Form.Get("password")

	usernameValid, _ := validateUserName(username)
	passwordValid, _ := validatePassword(password)

	if !usernameValid || !passwordValid {
		writeLoginErrorMessage(w, "invalid password or username")
		return
	}

	result := database.QueryRow("select id, password from Users where username=?", username)

	var hash string
	var id int

	err := result.Scan(&id, &hash)

	if err == nil { //username found
		if bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) != nil {
			writeLoginErrorMessage(w, "wrong password")
			return
		}
		fmt.Printf("[USER] %s logged in!\n", username)
	} else if errors.Is(err, sql.ErrNoRows) { //username not found
		writeLoginErrorMessage(w, "user does not exist")
		return
	} else { // mqix made a mistake
		fmt.Println("[USER] [LOGIN] [ERROR]", err)
		writeLoginErrorMessage(w, "server error")
		return
	}

	sessions.Put(r.Context(), "username", username)
	sessions.Put(r.Context(), "id", id)

	w.Header().Add("Hx-Location", "/")
}

func register(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	username := r.Form.Get("username")
	password := r.Form.Get("password")

	usernameValid, usernameMessage := validateUserName(username)
	passwordValid, passwordMessage := validatePassword(password)

	if !usernameValid || !passwordValid {
		writeLoginErrorMessage(w, usernameMessage+passwordMessage)
		return
	}

	hash, _ := bcrypt.GenerateFromPassword([]byte(password), 13)
	result, err := database.Exec("insert into Users (username, password) values (?, ?)", username, hash)

	if err != nil {
		if strings.Contains(err.Error(), "rpc error: code = AlreadyExists") {
			writeLoginErrorMessage(w, "username already exists")
			return
		}

		fmt.Println("[USER] [CREATE] [ERROR]", err)
		writeLoginErrorMessage(w, "server error")
		return
	}

	id, err := result.LastInsertId()

	if err != nil {
		fmt.Println("[USER] [CREATE] [ERROR]", err)
		writeLoginErrorMessage(w, "server error")
		return
	}

	fmt.Printf("[USER] %s (%d) created acount!\n", username, id)

	sessions.Put(r.Context(), "username", username)
	sessions.Put(r.Context(), "id", int(id))

	w.Header().Add("Hx-Location", "/")
}

func logout(w http.ResponseWriter, r *http.Request) {
	sessions.Clear(r.Context())

	if r.Header.Get("Hx-Request") == "true" {
		w.Header().Add("Hx-Location", "/")
		return
	}

	http.Redirect(w, r, "/", http.StatusFound)
}
