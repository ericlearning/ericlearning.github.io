const s = (sketch) => {
    let prevX;
    let prevY;
    let noiseScale = 0.01;

    sketch.setup = () => {
        canvas = sketch.createCanvas(400, 400);
        canvas.parent("sketch");
        prevX = sketch.mouseX;
        prevY = sketch.mouseY;
    };

    sketch.draw = () => {
        sketch.background(32);
        sketch.fill(200);
        sketch.noStroke();
        let d = sketch.dist(prevX, prevY, sketch.mouseX, sketch.mouseY);
        let w = sketch.noise(sketch.mouseX*noiseScale, sketch.mouseY*noiseScale);
        d = sketch.constrain(d*5, 52, 255);
        w = sketch.map(w, 0, 1, 5, 200);
        sketch.fill(d);
        sketch.rectMode(sketch.CENTER);
        sketch.rect(sketch.mouseX, sketch.mouseY, w, w);
        prevX = sketch.mouseX;
        prevY = sketch.mouseY;
    };
}

let vis = new p5(s);