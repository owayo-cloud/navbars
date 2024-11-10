// Password visibility toggle functionality
const togglePassword = (inputId, icon) => {
    const input = document.getElementById(inputId);
    const isPassword = input.type === "password";
    
    input.type = isPassword ? "text" : "password";
    icon.classList.toggle("bi-eye-slash", !isPassword);
    icon.classList.toggle("bi-eye", isPassword);
};

// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (form.checkValidity()) {
                const formData = new FormData(form);
                // Here you would typically send the data to your server
                console.log('Form submitted:', Object.fromEntries(formData));
                form.reset();
            }
            
            form.classList.add('was-validated');
        });
    });

    // Password match validation for signup
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    
    const validatePasswords = () => {
        if (confirmPassword.value !== signupPassword.value) {
            confirmPassword.setCustomValidity("Passwords don't match");
        } else {
            confirmPassword.setCustomValidity('');
        }
    };

    signupPassword?.addEventListener('change', validatePasswords);
    confirmPassword?.addEventListener('keyup', validatePasswords);
});