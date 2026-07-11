const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 1. Об’єкт formData поза функціями
let formData = {
  email: '',
  message: '',
};

// 2. Відновлення даних зі сховища
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// 3. Делегування події input
form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim(); // без пробілів по краях

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4. Сабміт форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // очищення
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
