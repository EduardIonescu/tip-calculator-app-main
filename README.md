### Links

-   Live Site URL: [Click here to see webpage](https://eduardionescu.github.io/tip-calculator-app-main/)

# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

## Table of contents

-   [Overview](#overview)

    -   [The challenge](#the-challenge)

-   [My process](#my-process)

    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)

-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Calculate the correct tip and total cost of the bill per person

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Sass
-   Flexbox
-   Mobile-first workflow
-   JavaScript

### What I learned

I used an object with setters, getters and other methods to manipulate my data.

This is a pretty cool way of setting and getting the data and also updating the website each time the data gets a new input from the user, that way it's quite efficient

```js
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
};
```

### Continued development

I want to keep using classes and objects with getters and setters. I can also improve the accessibility side of things.

## Author

-   Website - [EduardIonescu](https://ionescueduard.netlify.app)
-   Frontend Mentor - [@EduardIonescu](https://www.frontendmentor.io/profile/EduardIonescu)
