let sliderZ;
let sliderStep;
let noiseScale = 0.005;

function setup() {
  pixelDensity(1);
  canvas = createCanvas(400, 400);
  canvas.parent("sketch2");
  sliderZ = createSlider(0, 500, 100);
  sliderZ.position(10, 10);
  sliderZ.style('width', '150px');
  sliderStep = createSlider(1, 80, 5, 1);
  sliderStep.position(10, 40);
  sliderStep.style('width', '150px');
}

function draw() {
  loadPixels();
  for(let i=0; i<height; i++){
    for(let j=0; j<width; j++){
      let curZ = sliderZ.value();
      let step = sliderStep.value();
      let idx = (i*height+j)*4;
      let d = noise(j*noiseScale, i*noiseScale, curZ*noiseScale);
      d = map(d, 0, 1, 0, 255);
      d = Math.floor(d / step) * step;
      pixels[idx] = d;
      pixels[idx+1] = d;
      pixels[idx+2] = d;
      pixels[idx+3] = 255;
    }
  }
  updatePixels();
}