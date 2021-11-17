function changeOne() {
    document.getElementById('main-img').src = 'images/image-product-1.jpg'
}

// How  '-' and '+' work
var count = 0;
function addOne() {
    updateCount(++count);
}
function subOne() {
    updateCount(--count);
}
function updateCount(val) {
    document.getElementById("quantity").innerHTML = val;
}

// How to change image on mobile? 
// using arrows instead of preview images.

