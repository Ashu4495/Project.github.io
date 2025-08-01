/* Slideshow code removed for landing page loading screen */

document.addEventListener('DOMContentLoaded', () => {
  const loadingBar = document.querySelector('.loading-bar');
  const loadingScreen = document.querySelector('.loading-screen');
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      // Hide loading screen after loading completes
      loadingScreen.style.display = 'none';
    } else {
      width += 1; // Increase width by 1% per interval
      loadingBar.style.width = width + '%';
    }
  }, 40); // Adjust speed of loading bar here (40ms per 1%)
});
