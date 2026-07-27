// STEP 1: Initialize and declare variables
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');

/* STEP 2: Loop 5 times to create the <img> elements */
for (let i = 1; i <= 5; i++) {
    /* STEP 3a: Create a new DOM node - an image element */
    const newImage = document.createElement('img');

    /* STEP 3b: Set the src attribute to be the path of one of the images inside the images folder, using setAttribute() */
    newImage.setAttribute('src', `images/pic${i}.jpg`);

    /* Append the new image element to the thumbBar div, named in STEP 1 */
    thumbBar.appendChild(newImage);

    /* STEP 3c: Build event handler for each <img> */
    newImage.addEventListener('click', changeImage);
}

/* STEP 4: Function to change the src of the main <img> */
function changeImage(e) {
    // Rewrite the src attribute of the .displayed-img element
    const chosenImage = e.target.getAttribute('src');
    displayedImg.setAttribute('src', chosenImage);
}

/* STEP 5: Event Delegation
Instead of adding event handlers for each image, how about event delegation? Build a click handler on the parent element, and capture each target (and its attributes) from the event object */
// This is an alternative to STEP 3c above (comment out the per-image listener in the loop if using this instead)
// thumbBar.addEventListener('click', function (e) {
//     // event.target is the element that was clicked
//     if (e.target.nodeName === 'IMG') {
//         // grab the src attribute of the element that was clicked
//         const chosenImage = e.target.getAttribute('src');
//         // change the main image
//         displayedImg.setAttribute('src', chosenImage);
//     }
// });

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
