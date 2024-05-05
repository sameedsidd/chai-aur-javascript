# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target.id)
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight: ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Normal Range: ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Overweight: ${bmi}</span>`;
    }
  }
});
```

## Project 3

```javascript
const clock = document.querySelector("#clock");

// setInterval(function () {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString()
// }, 1000);

setInterval(function () {
  const today = new Date();

  // Get the current hour, minute, and second
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();

  // Determine if it's AM or PM
  let prepand = hour >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hour = hour >= 12 ? hour - 12 : hour;

  // Check for special cases when hour is 0 and it's PM
  if (hour === 0 && prepand === "PM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = "Noon";
    } else {
      hour = 12;
      prepand = "PM";
    }
  }

  // Check for special cases when hour is 0 and it's AM
  if (hour === 0 && prepand === "AM") {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = "Midnight";
    } else {
      hour = 12;
      prepand = "AM";
    }
  }

  // Display the current time
  clock.innerHTML = `${hour} : ${minute} : ${second} ${prepand}`;
}, 1000);
```
