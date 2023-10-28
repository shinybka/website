function toggleFullscreen() {
  const imageBox = document.querySelector('.image-box');

  if (!document.fullscreenElement) {
    imageBox.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
    imageBox.classList.add('fullscreen'); // Add a class when in fullscreen
  } else {
    document.exitFullscreen();
    imageBox.classList.remove('fullscreen'); // Remove the class when exiting fullscreen
  }
}
