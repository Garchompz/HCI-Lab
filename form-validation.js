// Validate form

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form fields
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phoneNum = document.getElementById('phone-num');
    var password = document.getElementById('password');
    var confPassword = document.getElementById('conf-password');
    var tos = document.getElementById('tos');
  
    // Validate form fields
    if(name.value === '') {
        alert('Please enter your name.');
        return;
    }
  
    if(email.value === '') {
        alert('Please enter your email.');
        return;
    }
  
    if(phoneNum.value === '') {
        alert('Please enter your phone number.');
        return;
    }
  
    if(password.value === '' || password.value.length < 6 || !/\d/.test(password.value)) {
        alert('Password must be at least 6 characters and contain a number.');
        return;
    }
  
    if(confPassword.value !== password.value) {
        alert('Passwords do not match.');
        return;
    }
  
    if(!tos.checked) {
        alert('You must agree to the terms and services.');
        return;
    }
  
    // If validation passes, submit the form
    alert('Form submitted successfully!');
  });