# Project related to DOM

## project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-3su3gg?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

const convertButtonNodeListInArray = Array.from(buttons);
convertButtonNodeListInArray.forEach(function (button) {
  button.addEventListener("click", (event) => {
    const eventCase = event.target.id;
    switch (eventCase) {
      case "grey":
        body.style.backgroundColor = event.target.id;
        break;

      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;

      case "white":
        body.style.backgroundColor = event.target.id;
        break;

      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid heigh ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid heigh ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight: ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi === 24.5) {
      results.innerHTML = `<span>Normal Range: ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Overweight: ${bmi}</span>`;
    }
  }
});
```
