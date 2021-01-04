let offset = 0;
let mouse_offset=1;

function setup(){
    craeteCanvas(400,400);
}
function draw(){
    background(0);
    fill(0);
    stroke(255);

    mouse_offset = (mouseX - width/2)(width/2);
    offset+=.02;

    for(let i=0;i<80;i++){
        beginShape();
        for(let j=0; j<100; j++){
            let p=createVector(100+j+2,70+i+3.2);
            let n=noise(i=10,j+.1+offset);
            let f=pow((1-cos(j/100+TWD_PI))/2,3.5)
            p.y+=f+n+(-30)+n+(-2);
            vertex(p.x,p.y)
        }
        endShape();
    }
}