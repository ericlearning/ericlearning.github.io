const s2 = (sketch) => {
    let prevCurZ = -1;
    let prevStep = -1;
    let sliderZ;
    let sliderStep;
    let noiseScale = 0.005;

    sketch.setup = () => {
        // sketch.pixelDensity(1);
        // canvas = sketch.createCanvas(400, 400);
        // canvas.parent("sketch2");
        // sliderZ = sketch.createSlider(0, 500, 100);
        // sliderZ.position(10, 10);
        // sliderZ.style('width', '150px');
        // sliderStep = sketch.createSlider(1, 80, 5, 1);
        // sliderStep.position(10, 40);
        // sliderStep.style('width', '150px');

        sketch.pixelDensity(1);
        canvas = sketch.createCanvas(400, 400);
        canvas.parent("sketch2");
        sliderZ = sketch.createSlider(0, 500, 100);
        sliderZ.position(canvas.position().x + 10, canvas.position().y + 10);
        sliderZ.style('width', '150px');
        sliderStep = sketch.createSlider(1, 80, 5, 1);
        sliderStep.position(canvas.position().x + 10, canvas.position().y + 40);
        sliderStep.style('width', '150px');
    };

    sketch.draw = () => {
        let curZ = sliderZ.value();
        let step = sliderStep.value();

        if(prevCurZ != curZ || prevStep != step){
            sketch.loadPixels();
            for (let i = 0; i < sketch.height; i++) {
                for (let j = 0; j < sketch.width; j++) {
                    let idx = (i * sketch.height + j) * 4;
                    let d = sketch.noise(j * noiseScale, i * noiseScale, curZ * noiseScale);
                    d = sketch.map(d, 0, 1, 0, 255);
                    d = Math.floor(d / step) * step;
                    sketch.pixels[idx] = d;
                    sketch.pixels[idx + 1] = d;
                    sketch.pixels[idx + 2] = d;
                    sketch.pixels[idx + 3] = 255;
                }
            }
            sketch.updatePixels();
            prevCurZ = curZ;
            prevStep = step;
        }
    };
}

let vis2 = new p5(s2);