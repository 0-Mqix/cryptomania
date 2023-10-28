export function formatFloat(x: number) {
	let str = ""

	if (x < 0.1) {
		const decimals = toFixed(x, 10).split(".")[1]
		if (!decimals) {
			str = x.toString()
		} else {
			for (let i = 0; i < decimals.length; i++) {
				if (decimals[i] == "0") {
					continue
				}

				str = toFixed(x, i + 3)
				break;
			}
		}
	} else if (x < 10) {
		str = toFixed(x, 3)
	} else {
		str = toFixed(x, 2)
	}

	return trimFloat(str)
}

export function toFixed(value: number, precision: number) {
    const multiplier = Math.pow(10, precision);
    const shiftedValue = Math.round(value * multiplier);
    const integerPart = Math.floor(shiftedValue / multiplier);
    const decimalPart = String(shiftedValue % multiplier).padStart(precision, '0');
    return `${integerPart}.${decimalPart}`;
}

export function trimFloat(s: string) {
	
	for (let i = s.length - 1; i > 1; i--) {
		if (s[i] != "0") { break }
		s = s.slice(0, i - (s[i - 1] == "." ? 1 : 0))
	}

	return s
}