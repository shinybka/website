function downloadImage() {
    // For simplicity, this example uses a placeholder link. Replace it with the actual image URL.
    var imageUrl = 'image1.jpg';
    
    // Create a temporary link element
    var link = document.createElement('a');
    
    // Set the download attribute and href
    link.download = 'downloaded_image.jpg';
    link.href = imageUrl;
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger a click on the link to start the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
}

function toggleFullscreen(image) {
    if (!document.fullscreenElement) {
        image.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}
