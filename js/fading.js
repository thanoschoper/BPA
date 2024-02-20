let headerBackgrounds = document.querySelectorAll(".background");
let imageIndex = 0;

function changeBackground() {
    // Remove showing class from the current background
    headerBackgrounds[imageIndex].classList.remove("showing");

    // Add the .hiding class to the current background
    headerBackgrounds[imageIndex].classList.add("hiding");

    // After a delay of 3000ms, add the "showing" class to the next background image
    setTimeout(() => {
        // Add the .showing class to the next background image
        headerBackgrounds[(imageIndex + 1) % headerBackgrounds.length].classList.add("showing");

        // Remove the .hiding class from the current background
        headerBackgrounds[imageIndex].classList.remove("hiding");

        // Increment the image index by one
        imageIndex++;

        // If the image index is more than there are elements, set it to 0
        if (imageIndex >= headerBackgrounds.length) {
            imageIndex = 0;
        }
    }, 4000); // Wait for 3000ms before changing the background
}

// Ensure images are loaded before starting the interval
window.addEventListener('load', () => {
    setInterval(changeBackground, 4000);
});
