const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const trimmed = nameInput.value.trim();
  if (trimmed) {
    nameOutput.textContent = trimmed;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
