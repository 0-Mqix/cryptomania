package main

import (
	"fmt"
	"html/template"
	"math"
	"strconv"
	"strings"
)

func formatFloat(number float64) string {
	var str string

	if number < 0.1 {
		decimals := strings.Split(strconv.FormatFloat(number, 'f', -1, 64), ".")[1]
		for i := 0; i < len(decimals); i++ {
			if decimals[i] == '0' {
				continue
			}
			str = fmt.Sprintf("%."+strconv.Itoa(i+3)+"f", number)
			break
		}

	} else if number < 10 {
		str = fmt.Sprintf("%.3f", number)
	} else {
		str = fmt.Sprintf("%.2f", number)
	}

	split := strings.Split(str, ".")
	runes := []rune(split[0])
	var result []rune

	for i := len(runes) - 1; i >= 0; i-- {
		result = append([]rune{runes[i]}, result...)
		if (len(runes)-1-i)%3 == 2 && i != 0 {
			result = append([]rune{'_'}, result...)
		}
	}

	if len(split) == 1 {
		return string(result)
	}

	return string(result) + "." + split[1]
}

func formatFloatFunction(input any) (string, error) {
	switch value := input.(type) {

	case float64, float32:
		return formatFloat(value.(float64)), nil

	case string:
		number, err := strconv.ParseFloat(value, 64)

		if err != nil {
			return "", err
		}
		return formatFloat(number), nil

	default:
		return fmt.Sprint(value), nil
	}
}

func priceChange(input string) (template.HTML, error) {
	value, err := strconv.ParseFloat(input, 64)

	if err != nil {
		return template.HTML(""), err
	}

	var class string

	if value < 0 {
		class = "negative"
	} else if value > 0 {
		class = "positive"
	}

	return template.HTML(fmt.Sprintf("<span class=\"%s\"/>%.2f %%<span/>", class, math.Abs(value))), nil
}

func lowCase(s string) string {
	return strings.ToLower(s)
}
