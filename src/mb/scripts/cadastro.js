
/**
 * Check if input target of keyboard or focus event
 * is valid and switch it's class accordingly;
 *
 * @param {KeyboardEvent|FocusEvent} e
 * @return void
 */
function markAsValidOnInputChange(event) {
    if (event.target && event.target.checkValidity()) {
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    }
}

function markInputValidityOnFocusOut(event) {
    if (event.target.checkValidity(event)) {
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
        return true;
    } else {
        event.target.classList.remove('is-valid');
        event.target.classList.add('is-invalid');
        return false;
    }
}

function markFormValidity(event) {
    if (!event.target.checkValidity(event)) {
        event.target.classList.add('was-validated');
        return false;
    }

    return true;
}

/*
sending form data to edit-profile page
*/
function signUp(event) {
    event.preventDefault();
    let accountChoice = document.querySelector('[name=accountChoice]:checked').value;
    let email = document.getElementById('email').value;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let cpf = document.getElementById('cpf').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    let data = localStorage.getItem('usersDb');
    let allUsers = JSON.parse(data || "[]");

    let exist = allUsers.find((user) => user.email === email);

    if (!exist) {
        allUsers.push({
            accountChoice,
            email,
            firstName,
            lastName,
            dob,
            cpf,
            phone,
            password
        });

        console.log(allUsers)

        localStorage.setItem('usersDb', JSON.stringify(allUsers));

        document.querySelector('form').reset();
        document.getElementById('email').focus();


        alert("Cadastro efetuado com sucesso! Clique no link abaixo para efetuar seu login.");
    } else {
        alert("Este endereço de e-mail já está cadastrado.");
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    let data = localStorage.getItem('usersDb');
    if (!data) {
        localStorage.setItem("usersDb",JSON.stringify(usersDb));
    }

    const form = document.getElementById("cmi-cadastro");

    // Stop default submit behaviour of the form abd stop the event propagation
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!markFormValidity(event)) {
            alert("**Campos obrigatórios")
            return;
        }

        signUp(event);
    })

    // Add valid and invalid classes based on focus out event of each input
    form.addEventListener("focusout", markInputValidityOnFocusOut);
    form.addEventListener("keyup", markAsValidOnInputChange);
    form.addEventListener("change", markAsValidOnInputChange);
});




