// BUTTON CLICK MESSAGE
document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Item preview coming soon!"); // CHANGE: Popup Message
    });
});

// HERO BUTTON ACTION
document.querySelector(".hero-btn").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".product-grid").offsetTop,
        behavior: "smooth"
    });
});
