// Form switching functionality
function showForm(form) {
    // Toggle active tab
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="showForm('${form}')"]`).classList.add('active');
    
    // Toggle forms with fade effect
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (form === 'login') {
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
    } else {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
    }
  }
  
  // Password toggle functionality
  function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  }
  
  // Form validation
  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginFormElement');
    const signupForm = document.getElementById('signupFormElement');
    
    // Validate login form
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      validateForm(loginForm);
    });
    
    // Validate signup form
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      validateForm(signupForm);
    });
    
    // Password match validation
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    
    function validatePasswordMatch() {
      if (confirmPassword.value !== signupPassword.value) {
        confirmPassword.parentElement.classList.add('error');
        confirmPassword.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
      } else {
        confirmPassword.parentElement.classList.remove('error');
        confirmPassword.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
      }
    }
    
    if (signupPassword && confirmPassword) {
      signupPassword.addEventListener('input', validatePasswordMatch);
      confirmPassword.addEventListener('input', validatePasswordMatch);
    }
  });
  
  function validateForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        showError(input, 'This field is required');
        isValid = false;
      } else if (input.type === 'email' && !isValidEmail(input.value)) {
        showError(input, 'Please enter a valid email address');
        isValid = false;
      } else {
        hideError(input);
      }
    });
    
    if (isValid && form.id === 'signupFormElement') {
      const password = form.querySelector('#signupPassword');
      const confirmPassword = form.querySelector('#confirmPassword');
      if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords don't match");
        isValid = false;
      }
    }
    
    if (isValid) {
      // Here you would typically submit the form to your server
      console.log('Form is valid, submitting...');
      form.reset();
    }
  }
  
  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    formGroup.classList.add('error');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
  
  function hideError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.style.display = 'none';
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }