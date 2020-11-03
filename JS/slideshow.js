var i = 0; //  variable used to keep loop running
var images = new Array(); //  create an empty array called images

images[0] = 'IMAGES/ROOM%201.jpg'; //  add images to the array
images[1] = 'IMAGES/ROOM%202.jpg';
images[2] = 'IMAGES/ROOM%203.jpg';

//changing images in the slideshow function
function changeImg() {
    document.getElementById('slides').src = images[i]; // load image of index given by i variable
    if (i < images.length - 1) { //  if i is less than max index value
        i++; //  increase the value of i
    } else {
        i = 0; //  if the index value is teh last one reset it to 0 hence slideshow restarts
    }
    setTimeout(changeImg, 5000); //  wait for 5 sec before changing i
}

setTimeout(changeImg, 5000); //  start the slide show