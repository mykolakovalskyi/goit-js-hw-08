const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const massageInput = form.querySelector('textarea');
const throttle = require('lodash.throttle');

let savedFormData = localStorage.getItem('feedback-form-state');
let formData = {};

try {
  if (savedFormData !== null) {
    formData = JSON.parse(savedFormData);
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

if (formData.email !== undefined) {
  emailInput.value = formData.email;
}
if (formData.message !== undefined) {
  massageInput.value = formData.message;
}

form.addEventListener(
  'input',
  throttle(event => {
    if (event.target.nodeName === 'INPUT') {
      formData.email = event.target.value;
    }
    if (event.target.nodeName === 'TEXTAREA') {
      formData.message = event.target.value;
    }
    let jsonFormData = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', jsonFormData);
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value !== '' && massageInput.value !== '') {
    event.currentTarget.reset();
    localStorage.clear();
    console.log(formData);
  }
});
