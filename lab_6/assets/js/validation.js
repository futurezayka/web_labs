document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll(
        'input[type="text"], input[type="date"], input[type="tel"], input[type="email"], input[type="password"]')
    inputs.forEach(input => input.addEventListener('input', function () {
        validation(input);
    }))
    const submitFormButton = document.querySelector('#submitFormButton');

    function validation(element) {
        const value = element.value;
        let error = false;
        if (element.type === 'text') {
            const pattern = /^[A-ZА-ЯҐЄІЇ][a-zа-яґєії`']+$/;
            if (!pattern.test(value)) {
                error = true;
            }
        }
        else if(element.type === 'date') {
            const date = new Date(value);
            const currentDate = new Date();
            const timeDifference = currentDate - date;
            const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365);
            if (yearsDifference > 120 || yearsDifference < 0) {
                error = true;
            }
        }
        else if(element.type === 'tel') {
            const pattern = /^\+38\(0\d{2}\)-\d{3}-\d{2}-\d{2}$/;
            if (!pattern.test(value)) {
                error = true;
            }
        }
        if(element.type === 'email') {
            const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!pattern.test(value)) {
                error = true;
            }
        }
        if(element.type === 'password') {
            const passwordLength = value.length;
            if (passwordLength < 8) {
                error = true;
            }
        }

        if (error) {
            showError(element);
        }
        else {
            deleteError(element)
        }
    }

    function showError(element) {
        const errorDiv = document.querySelector(`#error_${element.id}`);
        if (errorDiv) {
            return;
        }
        const newErrorDiv = document.createElement('div');
        const errorText = document.createElement('p');
        newErrorDiv.id = 'error_' + element.id;
        errorText.textContent = 'Введіть коректні дані';
        errorText.classList.add('errorText');
        newErrorDiv.appendChild(errorText);
        const parentElement = element.parentNode;
        parentElement.appendChild(newErrorDiv);
        submitFormButton.disabled = true;
    }

    function deleteError(element) {
        const errorDiv = document.querySelector(`#error_${element.id}`);
        if (errorDiv) {
            errorDiv.remove();
        }
        submitFormButton.disabled = false;
    }
});