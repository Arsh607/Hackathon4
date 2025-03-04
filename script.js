const eventForm = document.getElementById("registrationForm");

function validateEmailAddress(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validatePhoneNumber(phone) {
    const pattern = /^\d{10}$/;
    return pattern.test(phone);
}

eventForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let validForm = true;

    const emailInput = document.getElementById("email").value;
    const phoneInput = document.getElementById("phone").value;


    if (!validateEmailAddress(emailInput)) {
        document.getElementById("emailError").innerText = "Enter a valid email address.";
        validForm = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (!validatePhoneNumber(phoneInput)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
        validForm = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    if (validForm) {
        eventForm.submit();
    }
});