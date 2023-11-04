import { LitElement, html, css } from "lit"
import { property, state } from "lit/decorators.js"
import { formatFloat } from "./helpers"

export default class QuantitySelector extends LitElement {
	@property({ type: Number }) coin_price = 0
	@property({ type: Boolean }) sell = false
	@property({ type: String }) symbol = ""
	@property({ type: Number }) balance = 0

	@state() amount: number = 0
	@state() pecentage: number = 0
	@state() value: number = 0

	constructor() {
		super()
	}

	connectedCallback() {
		super.connectedCallback()

		const self = this
		const form = this.closest("form")

		if (!form) {
			return
		}

		form.addEventListener("formdata", function (e: FormDataEvent) {
			e.formData.set("amount", String(self.amount))
		})
	}

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
		this.amount = this.balance * (value / 100)
		this.value = this.amount * this.coin_price
	}

	private update_slide() {
		let percentage = (this.amount / this.balance) * 100
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
			value = this.value	
		}

		this.amount = value
		this.value = value * this.coin_price
		this.update_slide()

		//@ts-ignore
		e.target.value = value
	}

	private value_change(e: InputEvent) {
		//@ts-ignore
		let value = Number(e.target.value)

		if (this.sell && value > this.balance * this.coin_price) {
			value = this.balance * this.coin_price
		}

		this.value = value
		this.amount = value / this.coin_price
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
									autocomplete="off"
									aria-autocomplete="none"
									name="balance_percentage"
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
							autocomplete="off"
							aria-autocomplete="none"
							name="amount"
							@keydown=${this.ignore}
							@change=${this.coin_value_change}
							type="number"
							.value=${this.amount.toString()}
						/>
						<span class="suffix">${this.symbol.toUpperCase()}</span>
					</div>
					<div class="input">
						<input
							autocomplete="off"
							aria-autocomplete="none"
							name="value"
							@keydown=${this.ignore}
							@change=${this.value_change}
							type="number"
							.value=${formatFloat(this.value)}
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
			width: 100%;
			height: 40px;
			align-items: center;
		}

		.input input {
			all: unset;
			appearance: none;
			width: 100%;
			height: 100%;
			padding-left: 12px;
		}

		.input span {
			pointer-events: none;
			font-weight: bolder;
			padding: 12px;
		}

		@media screen and (min-width: 1600px) {
			.value {
				flex-direction: row;
			}
		}
	`
}
