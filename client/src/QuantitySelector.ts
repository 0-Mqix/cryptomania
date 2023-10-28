import { LitElement, html, css } from "lit"
import { property, state } from "lit/decorators.js"

export default class QuantitySelector extends LitElement {
	constructor() {
		super()
		this.symbol = ""
		this.balance = 0
		this.sell = false
		this.coin_value = 0
		this.pecentage = 0
		this.coin_price = 0.0
		this.value = this.coin_value * this.coin_price
	}

	@property({ type: Number })
	coin_price

	@property({ type: Boolean })
	sell

	@property({ type: String })
	symbol: ""

	@property({ type: Number })
	balance: number

	@state()
	coin_value: number

	@state()
	pecentage: number

	@state()
	value: number

	private ignore(e: KeyboardEvent) {
		if (e.key == "e" || e.key == "+" || e.key == "-") {
			e.preventDefault()
			e.stopPropagation()
		}
	}

	private slide(e: InputEvent) {
		//@ts-ignore
		let value = Number(e.target.value)
		this.pecentage = value
		this.coin_value = this.balance * (value / 100)
		this.value = this.coin_value * this.coin_price
	}

	private update_slide() {
		let percentage = (this.coin_value / this.balance) * 100
		percentage = Math.round(percentage)

		if (percentage >= 0 && percentage <= 100) {
			this.pecentage = percentage
		}
	}

	private coin_value_change(e: InputEvent) {
		//@ts-ignore
		let value = Number(e.target.value)

		if (
			this.sell &&
			value * this.coin_price > this.balance * this.coin_price
		) {
			value = this.balance
		}

		this.coin_value = value
		this.value = value * this.coin_price
		this.update_slide()
	}

	private value_change(e: InputEvent) {
		//@ts-ignore
		let value = Number(e.target.value)

		if (this.sell && value > this.balance * this.coin_price) {
			value = this.balance * this.coin_price
		}

		this.value = value
		this.coin_value = value / this.coin_price
		this.update_slide()

		//@ts-ignore
		e.target.value = value
	}

	render() {
		return html`
			<div class="quantity-selector">
				${this.sell
					? html`
							<div class="slider">
								<input
									@input=${this.slide}
									type="range"
									min="0"
									max="100"
									value="0"
									percentage="${this.pecentage}%"
									style="--percentage: ${this.pecentage}%"
								/>
							</div>
					  `
					: ""}
				<div class="value">
					<div class="input">
						<input
							@keydown=${this.ignore}
							@input=${this.coin_value_change}
							type="number"
							.value=${this.coin_value.toString()}
						/>
						<span class="suffix">${this.symbol.toUpperCase()}</span>
					</div>
					<div class="input">
						<input
							@keydown=${this.ignore}
							@input=${this.value_change}
							type="number"
							.value=${this.value.toFixed(2)}
						/>
						<span class="suffix">$</span>
					</div>
				</div>
			</div>
		`
	}

	static styles = css`
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		* {
			box-sizing: border-box;
		}

		input[type="number"] {
			-moz-appearance: textfield;
		}

		.quantity-selector {
			display: flex;
			flex-direction: column;
			gap: 12px;
      font-size: 12.8px;
		}

		.value {
			display: flex;
			gap: 12px;
      flex-direction: column;
		}

		.slider {
			display: flex;
			justify-content: center;
			background-color: var(--background-color);
			color: var(--color);
			border: solid var(--color) 2px;
			border-radius: 0.75rem;
			padding: 12px;
			font-size: 14px;
			padding-left: 20px;
			padding-right: 30px;
			flex-direction: column;
      align-items: center;
      height: 40px;
		}

		.slider input {
			all: unset;
		}

		.slider input {
			width: 100%;
			height: 100%;
			align-items: center;
			position: relative;
		}

		/* Hide the default browser thumb */
		input[type="range"]::-webkit-slider-thumb {
			appearance: none;
			width: 0;
			height: 0;
		}

		input[type="range"]::-moz-range-thumb {
			appearance: none;
			width: 0;
			height: 0;
		}
		/* Style the custom thumb */
		input[type="range"]::after {
			content: attr(percentage);
			display: block;
			position: absolute;
			left: var(--percentage);
			transform: translateX(-50%);
			color: var(--color);
		}

		.input {
			display: flex;
			background-color: var(--background-color);
			color: var(--color);
			border: solid var(--color) 2px;
			border-radius: 0.75rem;
			padding: 12px;
      width: 100%;
			gap: 12px;
      height: 40px;
      align-items: center;
		}

		.input input {
			all: unset;
			appearance: none;
			width: 100%;
			height: 100%;
		}

		.input span {
			pointer-events: none;
			font-weight: bolder;
			top: 0;
		}

    @media screen and (min-width: 1600px) {
      .value {
        flex-direction: row;
      }
    }
	`
}
