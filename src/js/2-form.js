const formData = {
  email: '',
  message: '',
};
const LS_KEY = 'feedback-form-state';

const regForm = document.querySelector('.feedback-form');

// Заповнюємо форму при завантаженні сторінки
document.addEventListener('DOMContentLoaded', populateForm);

regForm.addEventListener('submit', handleSubmit);
regForm.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(LS_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
}

function handleInput(event) {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(LS_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formData.email = email;
    formData.message = message;

    regForm.elements.email.value = email;
    regForm.elements.message.value = message;
  }
}
