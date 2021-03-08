let walls = [];

let particle;
let moveParticle;
let xoff = 0;
let yoff = 0;





function setup() {
    createCanvas(1280, 800);


    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);

        walls[i] = new Boundary(x1, x2, y1, y2);

    }

    particle = new Particle();

}



function draw() {
    background(10);


    for (let wall of walls) {
        wall.show();
    }
    particle.update(noise(xoff) * width, noise(yoff) * height);


    xoff += 0.002;
    yoff += 0.002;
    particle.show();
    particle.look(walls);

}