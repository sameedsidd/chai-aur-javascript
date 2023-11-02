# Project related to DOM

## project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-3su3gg?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code
## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

const convertButtonNodeListInArray = Array.from(buttons);
convertButtonNodeListInArray.forEach(function (button) {
  button.addEventListener('click', (event) => {
    const eventCase = event.target.id;
    switch (eventCase) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;

      case 'white':
        body.style.backgroundColor = event.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});

```