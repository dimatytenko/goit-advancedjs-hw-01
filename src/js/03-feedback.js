import throttle from 'lodash.throttle';

import refs from './refs';
import constants from './constants';

const savedMessage = localStorage.getItem(constants.FEEDBACK_FORM_KEY);

if (savedMessage) {
  const parsedMessage = JSON.parse(savedMessage);

  refs.formRef.elements.email.value = parsedMessage.email;
  refs.formRef.elements.message.value = parsedMessage.message;
}

refs.formRef.addEventListener('submit', onFormSubmit);
refs.formRef.addEventListener('input', throttle(onSaveInputsValue, 500));

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const {
    elements: { email, message },
  } = form;

  if (email.value === '' || message.value === '') {
    alert('All fields must be filled!');
  } else {
    const formData = {
      email: email.value.trim(),
      password: message.value.trim(),
    };

    console.log(formData);

    form.reset();
    localStorage.removeItem(constants.FEEDBACK_FORM_KEY);
  }
}

function onSaveInputsValue(event) {
  const form = event.currentTarget;
  if (!form?.elements) {
    return;
  }
  const {
    elements: { email, message },
  } = form;

  const formData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(constants.FEEDBACK_FORM_KEY, JSON.stringify(formData));
}
