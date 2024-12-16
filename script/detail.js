ScrollReveal().reveal(".room .room-detail", {
    distance: "50px",
    origin: "left",
    duration: 1000,
    reset: true,
})

ScrollReveal().reveal(".room .detail-img", {
    distance: "50px",
    origin: "right",
    duration: 1000,
    reset: true,
})

document.addEventListener("DOMContentLoaded", () => {
    const roomDetailImgs = document.querySelectorAll(".imgClick");
    const room = document.querySelector(".room"); 
    const popup = document.getElementById("popup");
    const popupImg = popup.querySelector("img");

    roomDetailImgs.forEach(img => {
        img.addEventListener("click", () => {
            popupImg.src = img.src;

            room.classList.toggle('active');
            popup.classList.toggle('active');
        });
    });

    document.addEventListener("click", (event) => {
        if (!popup.contains(event.target) && !event.target.closest('.imgClick')) {
            popup.classList.remove('active');
            room.classList.remove('active');
        }
    });
    
});



