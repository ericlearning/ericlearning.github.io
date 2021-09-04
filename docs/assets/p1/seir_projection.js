const seir = (p) => {
    // plotting parameters
    let plt;
    let sliders;
    let slidersParam;
    let checkbox;
    let h = 0.1;
    let N = 20000.0;
    let useFixedN = true;
    
    let colors = [p.color(0, 0, 255),
                  p.color(255, 128, 0),
                  p.color(255, 0, 0),
                  p.color(0, 255, 0)];
    let title = "SEIR Model";
    let layerNames = ["S", "E", "I", "R"];
    let legends = ["Susceptible", "Exposed", "Infected", "Recovered"];
    let legendsParam = ["β", "γ", "δ"];
    let initValue = [[0, N, N - 2000], [0, N, 2000], [0, N, 0], [0, N, 0]];
    let initValueParam = [[0, 1.0, 0.7], [0, 1.0, 0.2], [0, 1.0, 0.1]];

    // t, solution, and predictions
    let t, gt, rk;

    // ODE of the projection model
    let model = new SEIR(0.7, 0.2, 0.1);
    let modelParam = ["beta", "gamma", "delta"];

    // setup the visualizations for the analyses
    p.setup = () => {
        canvas = p.createCanvas(500, 500);
        canvas.parent("sketch4");

        [sliders, init] = sliderInit(canvas, initValue, 80, [20, 50], 150, p=p);
        [slidersParam, initParam] = sliderInit(canvas, initValueParam, 385, [20, 110], 50, p=p);
        checkbox = checkboxInit(canvas, sliders[0], p.fixedN, p=p);
        changeModelParam(model, modelParam, initParam)

        args = [];
        [t, rk] = run_analysis(model.interact, init, args, h = h);
        points = generatePointsMulti(t, rk, sliders.length);

        plt = new GPlot(p, 0, 0, p.width, p.height);
        plt.setTitleText(title);
        plt.getXAxis().setAxisLabelText("Time (days)");
        plt.getYAxis().setAxisLabelText("Population");
        plt.setYLim(-2000.0, 26000.0);
        addLayers(plt, layerNames, points, colors);
        console.log('seir', canvas.position().y)
    };

    // draw the plot and update them based on slider value
    p.draw = () => {
        if (JSON.stringify(init) != JSON.stringify(getSliderValues(sliders)) || 
            JSON.stringify(initParam) != JSON.stringify(getSliderValues(slidersParam))) {
            init = getSliderValues(sliders);
            initParam = getSliderValues(slidersParam);
            changeModelParam(model, modelParam, initParam)
            args = [];
            [t, rk] = run_analysis(model.interact, init, args, h = h);
            points = generatePointsMulti(t, rk, sliders.length);
            setLayers(plt, layerNames, points);
        }

        let realN = init.reduce((a, b) => a + b, 0);
        if (realN != N && useFixedN) {
            let diff = (N - realN) / init.length;
            for (let i = 0; i < sliders.length; i++) {
                sliders[i].value(init[i] + diff);
            }
            realN = getSliderValues(sliders).reduce((a, b) => a + b, 0);
        }

        p.background(255);
        drawPlot(plt);
        drawUI([80, 385], [[20, 50], [20, 110]], sliders, slidersParam, legends, legendsParam, checkbox, realN, colors, p=p);
    };

    p.fixedN = () => {
        useFixedN = checkbox.checked();
    }

}

let vis_seir = new p5(seir);