// Payment Button Functionality:
document.getElementById("ReceiptSubmit").addEventListener("submit", function (event) {
    // 1. Prevent the page from refreshing:
    event.preventDefault();

    // 2. Capture the user input:
    const name = this.name.value;
    const email = this.email.value;
    const address = this.address.value;

    // 3. Create the Receipt HTML:
    const receiptContainer = document.querySelector(".payment-form");

    receiptContainer.innerHTML = `
        <div style="text-align: center; color: #1a1a54;">
            <h2 style="color: green;"> Payment Successful!</h2>
            <p>Thank you, <strong>${name}</strong>. Your order is being processed.</p>
            <hr>
            <div style="text-align: left; padding: 10px; font-family: monospace;">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Delivery Address:</strong> ${address}</p>
                <p> Your Package Is Ready! <p>
            </div>
            
    `;
});

// Map API Functionality:
navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    const mapDiv = document.getElementById("map");

    // Using a reliable OpenStreetMap Embed URL
    mapDiv.innerHTML = `
        <iframe 
            width="1200" 
            height="350" 
            frameborder="100" 
            scrolling="no" 
            marginheight="50%" 
            marginwidth="90%" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}" 
            style="border: 1px solid black; border-radius: 12px;">
        </iframe>`;
}, error => {
    console.log("User denied location access.");
    document.getElementById("map").innerHTML = "<p>Please Enable Yor Location.</p>";
});