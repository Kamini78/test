document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const addSkillButton = document.getElementById("add-skill");
    const closeModalButton = document.getElementById("close-modal");
    const saveSkillButton = document.getElementById("save-skill");

    addSkillButton.addEventListener("click", function () {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    saveSkillButton.addEventListener("click", function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Carousel
    const track = document.querySelector(".carousel-track");
    let index = 0;

    function moveCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
        index = (index + 1) % 3;
    }

    setInterval(moveCarousel, 5000);
});