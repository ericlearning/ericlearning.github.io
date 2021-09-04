function changeModelParam(model, modelParam, param){
    for (let i=0; i<modelParam.length; i++){
        model[modelParam[i]] = initParam[i];
    }
}

function sliderInit(canvas, initValue, x, y, w, p=null) {
    let canvX = canvas.position().x;
    let canvY = canvas.position().y;
    let out = [];
    let initVal = [];
    for (let i = 0; i < initValue.length; i++) {
        let cur_slider;
        if (p == null){
            cur_slider = createSlider(initValue[i][0],
                initValue[i][1], initValue[i][2], 0);
        }
        else{
            cur_slider = p.createSlider(initValue[i][0],
                initValue[i][1], initValue[i][2], 0);
        }
        cur_slider.position(canvX + x, canvY + (i * y[0] + y[1]));
        cur_slider.style('width', w + 'px');
        out.push(cur_slider)
        initVal.push(initValue[i][2]);
    }
    return [out, initVal];
}

function checkboxInit(canvas, ref, f, p=null) {
    if (p == null){
        checkbox = createCheckbox('', true);
    }
    else{
        checkbox = p.createCheckbox('', true);
    }
    checkbox.changed(f);
    checkbox.position(ref.x + ref.width + 120, ref.y + 2);
    return checkbox;
}

function drawUI(x, y, sliders, slidersParam, legends, legendsParam, checkbox, realN, colors, p=null){
    if (p == null){
        drawUIGlobal(x, y, sliders, slidersParam, legends, legendsParam, checkbox, realN, colors);
    }
    else{
        drawUIInstance(x, y, sliders, slidersParam, legends, legendsParam, checkbox, realN, colors, p);
    }
}

function drawUIGlobal(x, y, sliders, slidersParam, legends, legendsParam, checkbox, realN, colors) {
    p.fill(0);
    p.textSize(14);
    for (let i = 0; i < sliders.length; i++) {
        p.text(legends[i], x[0] + 175, i * y[0][0] + y[0][1] + 17);
    }
    for (let i = 0; i < slidersParam.length; i++) {
        p.text(legendsParam[i], x[1] + 63, i * y[1][0] + y[1][1] + 15);
    }

    p.text('Fixed N', 377, 70);
    p.textSize(12);
    p.text('People', 423, 100);
    p.textSize(23);
    p.text(Math.round(realN), 354, 101);

    for (let i = 0; i < sliders.length; i++) {
        p.fill(colors[i]);
        p.circle(x[0] + 164, i * y[0][0] + y[0][1] + 12, 10);
    }
}

function drawUIInstance(x, y, sliders, slidersParam, legends, legendsParam, checkbox, realN, colors, p) {
    p.fill(0);
    p.textSize(14);
    for (let i = 0; i < sliders.length; i++) {
        p.text(legends[i], x[0] + 175, i * y[0][0] + y[0][1] + 17);
    }
    for (let i = 0; i < slidersParam.length; i++) {
        p.text(legendsParam[i], x[1] + 63, i * y[1][0] + y[1][1] + 15);
    }

    p.text('Fixed N', 377, 70);
    p.textSize(12);
    p.text('People', 423, 100);
    p.textSize(23);
    p.text(Math.round(realN), 354, 101);

    for (let i = 0; i < sliders.length; i++) {
        p.fill(colors[i]);
        p.circle(x[0] + 164, i * y[0][0] + y[0][1] + 12, 10);
    }
}

function generatePointsMulti(t, rk, N) {
    let out = [];
    for (i = 0; i < N; i++) {
        out.push(generatePoints(t, rk.col(i + 1).elements));
    }
    return out;
}

function addLayers(plt, layerNames, allPoints, colors) {
    for (i = 0; i < layerNames.length; i++) {
        plt.addLayer(layerNames[i], allPoints[i]);
        plt.getLayer(layerNames[i]).setPointColor(colors[i]);
    }
}

function setLayers(plt, layerNames, allPoints) {
    for (i = 0; i < layerNames.length; i++) {
        plt.getLayer(layerNames[i]).setPoints(allPoints[i]);
    }
}

function getSliderValues(sliders) {
    let out = [];
    for (i = 0; i < sliders.length; i++) {
        out.push(sliders[i].value());
    }
    return out;
}

function drawPlot(plt) {
    plt.beginDraw();
    plt.drawBackground();
    plt.drawBox();
    plt.drawXAxis();
    plt.drawYAxis();
    plt.drawTopAxis();
    plt.drawRightAxis();
    plt.drawTitle();
    plt.drawPoints();
    plt.drawLines();
    plt.endDraw();
}