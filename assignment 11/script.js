function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('addressError').textContent = '';
    document.getElementById('cityError').textContent = '';

    // Name validation
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    if (!phone || phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Date of birth validation
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('dobError').textContent = 'Please enter your date of birth.';
        isValid = false;
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        isValid = false;
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (!age || age < 1 || age > 120) {
        document.getElementById('ageError').textContent = 'Please enter a valid age between 1 and 120.';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (!password || password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!confirmPassword || confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords must match.';
        isValid = false;
    }

    // Address validation
    const address = document.getElementById('address').value;
    if (!address) {
        document.getElementById('addressError').textContent = 'Please enter your address.';
        isValid = false;
    }

    // City validation
    const city = document.getElementById('city').value;
    if (!city) {
        document.getElementById('cityError').textContent = 'Please enter your city.';
        isValid = false;
    }

    return isValid; // The form will only be submitted if all validations pass
}
