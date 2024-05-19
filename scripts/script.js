document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var emailInput = document.getElementById('user');
    var emailError = document.getElementById('userError');
    var emailValue = emailInput.value;
    
    var passwordInput = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');
    var passwordValue = passwordInput.value;

    var invalidEmailPattern = /[+=\'*%$#@]/;
    var isValid = true;

    if (invalidEmailPattern.test(emailValue)) {
        emailError.textContent = 'El username contiene caracteres inválidos.';
        emailError.style.display = 'block'; 
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none'; 
    }

    if (passwordValue.length < 6) {
        passwordError.textContent = 'Contraseña incorrecta. Al menos 6 caracteres.';
        passwordError.style.display = 'block'; 
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none'; 
    }

    if (isValid) {
        console.log('Formulario válido. Redirigiendo a success.html');
        window.location.href = './success.html'; // Verifica la ruta de success.html
    } else {
        console.log('Formulario inválido. No redirigir.');
    }
});
