var font;
function preload() {
  font = loadFont('assets/Calistoga-Regular.ttf');
}

var points;

function setup() {
  createCanvas(900, 400);
  fill(255, 104, 204, 150);
  noStroke();

  points = font.textToPoints('c o d e', 50, 300, 300, {
    sampleFactor: .3,
    simplifyThreshold: 0
  });

}

function draw() {
    background(0);

    for (let i=0; i<points.length; i++) {
        ellipse(points[i].x
                  + random(map(mouseX, width*1.5, width/2, 0, 10, true)),
                points[i].y 
                  + random(map(mouseX, height*1.5, height/2, 0, 10, true)),
                10, 10);
    }
    noLoop();
}

function mouseMoved(){
    loop();
}

/*
Notice that the sketch stops generating new patterns when the mouse stops moving.
That’s because at the bottom of the draw() function the noLoop() command
is called which stops the sketch from looping further. At the same time, 
inside the mouseMoved() function we call the loop() function which 
reactivates the sketch when the mouse is moved.
*/