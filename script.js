let p;

function setup() {
    // console.log('setup');
    createCanvas(window.innerWidth, window.innerHeight);
    // console.log(random(100));

    p = new Particle();
}


function draw() {
    // // You can see draw is constantly called. This makes it very easy to do animation.
    // console.log('draw');

    // // You can uncomment this. Very cool effect!
    // if (mouseIsPressed) {
    //     console.log(mouseX, mouseY);
    //     fill(0);
    // } else {
    //     fill(100);
    // }
    //
    // // fill(0);
    // // circle(150, 150, 80);
    // circle(mouseX, mouseY, 80);

    p.update();
    p.draw();
}

class Particle {
    constructor() {
        // Position
        this.pos = createVector(random(width), random(height));
        // Velocity
        this.vel = createVector(random(-2, 2), random(-2, 2));
        // Size
        this.size = 10;
    }

    update() {
        this.pos.add(this.vel);
    }

    draw() {
        noStroke();
        fill('rgba(255,255,255,0.5');
        circle(this.pos.x, this.pos.y, this.size);
    }
}



