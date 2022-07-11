const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = `${scrolled}%`;
});
