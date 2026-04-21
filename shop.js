const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("search-input");
const cards = document.querySelectorAll(".shop-cards");

searchBtn.addEventListener("click", () => {
    const value = searchInput.value.toLowerCase().trim();

    cards.forEach((card) => {
        // Find the div that has the brand ID (e.g., "Kawasaki")
        const brandIdElement = card.querySelector(".products > div[id]");

        if (brandIdElement) {
            const brandName = brandIdElement.id.toLowerCase();

            // Check if the brand name matches the search
            if (brandName.includes(value) || value === "") {
                card.classList.remove("inactive-card");
            } else {
                card.classList.add("inactive-card");
            }
        }
    });
});

// Trigger search on 'Enter' key press
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});