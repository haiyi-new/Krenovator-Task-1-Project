function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const resetPasswordForm = document.querySelector("#resetPassword");
    const linkloginaForm = document.querySelector("#linklogina");
    

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        resetPasswordForm.classList.add("form--hidden")
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        resetPasswordForm.classList.add("form--hidden")
    });

    document.querySelector("#linkresetPassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
        resetPasswordForm.classList.remove("form--hidden")
    });
    document.querySelector("#linklogina").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        resetPasswordForm.classList.add("form--hidden")
    });
    

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Username must be at least 5 characters in length");
            }
            if (e.target.id === "loginUsernameEmail" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Username or Email must be at least 5 characters in length");
            }

        });
            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);    
        });
            
        // Blur, if click other than the click ,make it error if not fullfil requirement
    });
});