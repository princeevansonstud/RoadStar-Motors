// SignUp & LogIn Buttons Functionality:

function showSignUp() {
    document.getElementById('LoginForm').classList.remove('active');
    document.getElementById('SignUpForm').classList.add('active');
}

function showLogin() {
    document.getElementById('LoginForm').classList.add('active');
    document.getElementById('SignUpForm').classList.remove('active');
}

// Event listeners for form submissions:
document.getElementById('LoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    handleFormSubmit(this, "Logging Into Your Account...");
});

document.getElementById('SignUpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateSignUpForm()) {
        handleFormSubmit(this, "Creating Your Account...");
    }
});

// Password Match & Length Validation:
function validateSignUpForm() {
    const password = document.querySelector('#SignUpForm input[type="password"]:first-of-type').value;
    const confirmpassword = document.querySelector('#SignUpForm input[type="password"]:last-of-type').value;

    if (password !== confirmpassword) {
        alert("Passwords Don't Match");
        return false;
    }

    if (password.length < 8) {
        alert("Password Should Be At least Eight Characters");
        return false;
    }

    return true;
    // Validation passed
}

// Loading Animation:
function handleFormSubmit(form, loadingText) {
    const button = form.querySelector('.btn-primary');
    const loading = button.querySelector('.loading');
    const btnText = button.querySelector('.btn-text');
    const originalText = btnText.textContent;

    loading.style.display = 'inline-block';
    loading.classList.add('show');
    btnText.textContent = loadingText;
    button.disabled = true;

    // Simulate API Call:
    setTimeout(() => {
        loading.style.display = 'none';
        loading.classList.remove('show');
        button.disabled = false;
        btnText.textContent = originalText;

        if (form.id === 'LoginFormSubmit') {
            showSucessMessage('Login Successful! Redirecting...')

        } else if (form.id === 'SignUpFormSubmit') {
            showSucessMessage('Account Creation Successful! Redirecting...')
        }

    }, 2000);
}

// Visible Notification Message:


function showSuccessMessage(message) {
    const notification = document.createElement("div");
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.backgroundColor = "rgba(12, 12, 90, 0.932)";
    notification.style.color = "white";
    notification.style.padding = "16px 24px";
    notification.style.borderRadius = "12px";
    notification.style.fontWeight = "600";
    notification.style.boxShadow = "0 10px 25px rgb(0, 0, 0)";
    notification.style.zIndex = "1000";
    notification.style.animation = "slideInright 0.5s ease";
    notification.textContent = message;
    document.body.appendChild(notification);

    notification.textContent = message
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
