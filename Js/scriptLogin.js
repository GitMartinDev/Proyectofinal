document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    // Validar correo electrónico
    if (!isValidEmail(emailInput.value)) {
        alert('Por favor, introduce un correo electrónico válido.');
        event.preventDefault(); // Evitar que el formulario se envíe
        return;
    }

    // Más validaciones si es necesario

    // Si pasa todas las validaciones, el formulario se enviará normalmente
});

function isValidEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
