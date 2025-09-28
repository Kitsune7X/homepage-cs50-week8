window.addEventListener('DOMContentLoaded', function () {
    // Reference image thumbnails
    let imageThumb = this.document.getElementsByClassName('display-image_thumb');
    // Reference image display 
    let imageDisplay = this.document.getElementById('display-image');
    // Get all the image thumbnais
    for (let i = 0; i < imageThumb.length; i++) {
        imageThumb[i].addEventListener('click', function () {
            // Get the src attribute from clicked on thumbnail
            let imageShow = this.firstElementChild.getAttribute('src');
            // Set the src of displaying image to that src
            imageDisplay.setAttribute('src', imageShow);
        });
    }
});