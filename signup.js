document.getElementById("SignUpFormSubmit").addEventListener("submit", function (event) {
    // 1. Stop the page from refreshing
    event.preventDefault();

    // 2. Capture values
    const name = this.name.value;
    const password = this.password.value;
    const confirm = this.confirmpassword.value;
    const signCard = document.querySelector(".sign-card");

    // 3. Validation: Length Check
    if (password.length < 8) {
        alert("Security Alert: Password must be at least 8 characters long.");
        return;
    }

    // 4. Validation: Match Check
    if (password !== confirm) {
        alert("Error: Passwords do not match. Please try again.");
        return;
    }

    // 5. Success State
    signCard.innerHTML = `
        <div style="text-align: center; color: #1a1a54; padding: 20px;">
            <h2 style="color: #1a1a54;">Welcome to the Family!</h2>
            <p>Thank you for Choosing RoadStar Motors, <strong>${name}</strong>.</p>
            <p style="color: green; font-weight: bold;">✔ Account Successfully Created</p>
            <hr style="border: 1px solid #1a1a54; margin: 20px 0;">
            <p>You can now access your cart and community features.</p>
            <br>
            <button onclick="window.location.href='login.html'" style="padding: 10px 20px; background: #1a1a54; color: white; border: none; border-radius: 5px; cursor: pointer;">Log In Now</button>
        </div>
    `;
});