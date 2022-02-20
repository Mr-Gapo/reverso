// https://p5js.org/reference/

var screen = 600
var fps = 60
var x = 20
var y = 20


function setup() {
    createCanvas(screen,screen);
    frameRate(fps)
}

function draw() {
    background(80,80,80);
    fill(255,0,0)
    rect(x,y,20,20)
    if (x >= screen && y >= screen){
        x--
        y--
    }
    else if (x <= screen && y <= screen) {
        x++
        y++
        
    }
}
