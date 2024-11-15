const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const emailInput = form.elements.email;
const messageInput = form.elements.message;

function savedData() {
    const savedMessage = JSON.parse(localStorage.getItem(localStorageKey));

    if (savedMessage) {
        emailInput.value = savedMessage.email || '';
        messageInput.value = savedMessage.message || '';
}
}

form.addEventListener('input', event => {
    const formData = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };

    if (formData.email === '' || formData.message === '') {
        alert('Please fill in all the fields!');
        return;
}

console.log(formData);

event.currentTarget.reset();
localStorage.removeItem(localStorageKey);
});

savedData();