import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));

const LOCAL_DATA = 'feedback-form-state';
const obj = localStorage.getItem(LOCAL_DATA);
const parsedObj = JSON.parse(obj);

saveInput();

function onInput(e) {
  //   console.log(e.target.value);
  //   const {
  //     elements: { email, message },
  //   } = e.currentTarget;
  localStorage.setItem(
    LOCAL_DATA,
    JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  );
}

function saveInput() {
  if (obj) {
    form.elements.email.value = parsedObj.email || '';
    form.elements.message.value = parsedObj.message || '';
  }
}

form.addEventListener('submit', onClickButton);

function onClickButton(e) {
  e.preventDefault();
  localStorage.clear();
  localStorage.removeItem(LOCAL_DATA);

  form.elements.email.value = '';
  form.elements.message.value = '';

  console.log(parsedObj);
}
