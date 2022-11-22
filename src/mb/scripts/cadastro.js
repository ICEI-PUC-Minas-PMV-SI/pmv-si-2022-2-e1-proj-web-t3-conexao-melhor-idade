/**
 * Check if input target of keyboard or focus event
 * is valid and switch it's class accordingly;
 *
 * @param {KeyboardEvent|FocusEvent} e
 * @return void
 */
function checkIsValid(e) {
    if (e.target && e.target.checkValidity()) {
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    const form = document.getElementById("cmi-cadastro");

    // Stop default submit behaviour of the form abd stop the event propagation
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();
    })

    // Add valid and invalid classes based on focus out event of each input
    form.addEventListener("focusout", function(event) {
        if (event.target.checkValidity()) {
            event.target.classList.remove('is-invalid');
            event.target.classList.add('is-valid');
        } else {
            event.target.classList.remove('is-valid');
            event.target.classList.add('is-invalid');
        }
    });

    form.addEventListener("keyup", checkIsValid);
    form.addEventListener("change", checkIsValid);

    // start - SignUp Buttons
    function toggleSignUpType(elem1, elem2) {
        elem1.addEventListener("click", function (e) {
            elem1.classList.remove("btn-light");
            elem1.classList.add("btn-primary");
            elem2.classList.remove("btn-primary");
            elem2.classList.add("btn-light");
        });
    }

    const opt1 = document.getElementById("cmi-sign-up-client");
    const opt2 = document.getElementById("cmi-sign-up-pro");

    toggleSignUpType(opt1, opt2);
    toggleSignUpType(opt2, opt1);
    // end - SignUp Buttons
})
