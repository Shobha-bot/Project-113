function preloaded() {
    
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 180, 150, 300, 200);

    fill(148, 0, 211);

    circle(50, 50, 50);
    circle(590, 50, 50);
    circle(50, 430, 50);
    circle(590, 430, 50);

    fill(0, 57, 230);

    rect(75, 43, 490, 20);
    rect(75, 420, 490, 20);
    rect(39, 70, 20, 334);
    rect(575, 70, 25, 334);
}

function take_snapshot() {
    save('mySelfie.png');
}

