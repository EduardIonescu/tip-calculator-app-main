const bill = document.querySelector("#input-bill");
const people = document.querySelector("#input-people");
const tipButtons = document.querySelectorAll(".button-tip");
const customTipButton = document.querySelector("#input-custom");

const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");

const removePercentageSignRegex = /[0-9]+/g;

const reset = document.querySelector("#reset-button");

// GETTER + updateValue method
const data = {
	billValue: "",
	// updateValue calls calculateAllPerPerson each time it changes;
	updateBillValue: function () {
		this.billValue = bill.value;
		calculateAllPerPerson(this.billValue, this.numberOfPeople);
	},
	get latestBillValue() {
		return this.billValue;
	},

	numberOfPeople: "",
	updateNumberOfPeople: function () {
		this.numberOfPeople = people.value;
		calculateAllPerPerson(this.billValue, this.numberOfPeople);
	},
	get latestNumberOfPeople() {
		return this.numberOfPeople;
	},

	tipPercent: "",
	updateTipPercent: function (value) {
		this.tipPercent = value;
		calculateAllPerPerson(this.billValue, this.numberOfPeople);
	},
	get latestTipPercent() {
		return this.tipPercent;
	},

	resetAll: function () {
		this.billValue = "";
		this.numberOfPeople = "";
		this.tipPercent = "";
		calculateAllPerPerson(this.billValue, this.numberOfPeople);
	},
};

// INPUTS
bill.addEventListener("input", () => {
	data.updateBillValue(bill.value);
});
people.addEventListener("input", () => {
	data.updateNumberOfPeople(people.value);
});

// SELECT TIP
tipButtons.forEach((button) => {
	button.addEventListener("click", () => focusButton(button));
});

// FOCUS SELECT TIP BUTTONS
function focusButton(btn) {
	removeTipButtonsFocus();
	btn.classList.add("focused");

	data.updateTipPercent(btn.value.match(removePercentageSignRegex));
}

// INPUT CUSTOM TIP
customTipButton.addEventListener("input", () => focusCustomTipButton());

function focusCustomTipButton() {
	removeTipButtonsFocus((includeCustomButton = false));
	if (customTipButton.value) {
		customTipButton.classList.add("custom-button-focused");
	} else {
		customTipButton.classList.remove("custom-button-focused");
	}
	data.updateTipPercent(customTipButton.value);
}

// CALCULATE BILL & TIP AMOUNT PER PERSON
function calculateAllPerPerson(billValue, numberOfPeople) {
	billValue = parseFloat(billValue);
	if (billValue && numberOfPeople) {
		if (data.latestTipPercent) {
			let tip = (billValue * data.latestTipPercent) / 100;
			tipAmount.textContent = (tip / numberOfPeople).toFixed(2);
			total.textContent = ((billValue + tip) / numberOfPeople).toFixed(2);
		} else {
			total.textContent = (billValue / numberOfPeople).toFixed(2);
			setToInitial(tipAmount);
		}
	} else {
		setToInitial(tipAmount);
		setToInitial(total);
	}
}
function setToInitial(input) {
	input.textContent = "$0.00";
}

// RESET BUTTON
reset.addEventListener("click", () => {
	resetInputs();
});

function resetInputs() {
	bill.value = "";
	people.value = "";

	data.resetAll();

	removeTipButtonsFocus();
}

// REFACTOR
function removeTipButtonsFocus(includeCustomButton = true) {
	tipButtons.forEach((button) => {
		if (button.classList.contains("focused")) {
			button.classList.remove("focused");
		}
	});
	if (customTipButton.value && includeCustomButton) {
		customTipButton.value = "";
		customTipButton.classList.remove("custom-button-focused");
	}
}
