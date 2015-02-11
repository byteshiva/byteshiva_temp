package main

import "fmt"

// Sample Functions in Go
func formatName(name string) string {
	return name
}

func formatName1(name string) (string, int) {
	return name, len(name)
}

func main() {
	fmt.Println("Greetings, Fellow go-developers ")
	name, size := formatName1("Siva Subra")
	// name, _ = formatName("Siva Chii")
	fmt.Println(name, size)
	fmt.Println(formatName("Siva"))
}
