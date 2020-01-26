function setup() {
    console.log('setup');
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    // You can see draw is constantly called. This makes it very easy to do animation.
    console.log('draw');

    fill(0);
    // circle(150, 150, 80);
    circle(mouseX, mouseY, 80);
}



