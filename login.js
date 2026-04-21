document.getElementById("LoginFormSubmit").addEventListener("submit", function (event) {
    // 1. Prevent the page from refreshing:
    event.preventDefault();

    // 2. Capture the user input:
    const name = this.name.value;

    // 3. TARGET FIX: Change .payment-form to .sign-card
    const loginContainer = document.querySelector(".sign-card");

    // 4. Create the Welcome Message:
    loginContainer.innerHTML = `
        <div style="text-align: center; color: #1a1a54; padding: 20px;">
            <h2 style="color: #1a1a54;">Welcome Back!</h2>
            <p>Thank you, <strong>${name}</strong>.</p>
            <p style="color: green; font-weight: bold;">✔ Account Verified</p>
            <hr style="border: 1px solid #1a1a54;">
            <div style="text-align: center; padding: 10px; font-family: monospace;">
                <p>Please return to the Home Page.</p>
                <p>Processing verification factors...</p>
            </div>
            <br>
            <button onclick="window.location.href='index.html'" style="padding: 10px 20px; background: #1a1a54; color: white; border: none; border-radius: 5px; cursor: pointer;">Go Home</button>
        </div>
    `;
});