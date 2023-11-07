// for explanatio view the go code that is amlost exactly the same
export function formatFloat(x: number, disableUnderscore = false) {
	let str = ""

	if (x < 0.1) {
   const decimals = x.toString().split('.')[1];

   		if (!decimals) {
			str = x.toString()
		} else {
			for (let i = 0; i < decimals.length; i++) {
				if (decimals[i] == "0") {
					continue
				}

				str = x.toFixed(i + 3)
				break;
			}
		}
	} else if (x < 10) {
		str = x.toFixed(3)
	} else {
		str = x.toFixed(2)
	}

	if (disableUnderscore) {
		return trimFloat(str)
	}

	const split = str.split(".")
	const left = split[0]
	let formatted = ""

	for (let i = left.length- 1; i >= 0; i--) {
		formatted = left[i] + formatted
		if ((left.length-1-i) % 3 == 2 && i != 0) {
			formatted = "_" + formatted
		}
	}

	return trimFloat(formatted + (split[1] ? "." + split[1] : ""))
}

// remove un necesary 0s at the end
export function trimFloat(s: string) {
	
	for (let i = s.length - 1; i > 1; i--) {
		if (s[i] != "0") { break }
		s = s.slice(0, i - (s[i - 1] == "." ? 1 : 0))
	}

	return s
}