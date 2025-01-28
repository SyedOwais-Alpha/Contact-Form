document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Load saved data from localStorage
    nameInput.value = localStorage.getItem('name') || '';
    emailInput.value = localStorage.getItem('email') || '';
    subjectInput.value = localStorage.getItem('subject') || '';
    messageInput.value = localStorage.getItem('message') || '';

    // Store data in localStorage
    nameInput.addEventListener('input', () => localStorage.setItem('name', nameInput.value));
    emailInput.addEventListener('input', () => localStorage.setItem('email', emailInput.value));
    subjectInput.addEventListener('input', () => localStorage.setItem('subject', subjectInput.value));
    messageInput.addEventListener('input', () => localStorage.setItem('message', messageInput.value));

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        } else {
            hideError('nameError');
        }

        // Email validation using regex
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            showError('emailError', 'Enter a valid email address');
            isValid = false;
        } else {
            hideError('emailError');
        }

        // Subject validation
        if (subjectInput.value.trim() === '') {
            showError('subjectError', 'Subject is required');
            isValid = false;
        } else {
            hideError('subjectError');
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        } else {
            hideError('messageError');
        }

        // If the form is valid, show success message
        if (isValid) {
            successMessage.textContent = 'Form submitted successfully!';
            form.reset(); // Clear the form
            localStorage.clear(); // Clear the localStorage
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.style.display = 'none';
    }
});
