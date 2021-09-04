---
layout: post
title:  "Introduction to the Blog"
date:   2021-08-23 00:58:35 +0900
categories: Misc
---
Hello! Covid Aggregate is a blog that aggregates various researches on COVID-19, especially on data science aspects such as forecasts or projection models. The purpose of this blog is to aggregate countless research papers on these topics, distill them down to their main ideas, and explain them in a data science perspective with interactive visualizations.

## Blog Setup
This blog is hosted on [github pages](pages.github.com), and uses [Jekyll](https://jekyllrb.com/) to generate the static website from markdown. Interactive plots are mainly created using [plotly](https://plotly.com/), an interactive plotting library for Python. It is then exported to html, and embedded into markdown. Other interactive figures are added by converting the experiments (usually done in python) to [p5js](https://p5js.org/).

## P5JS Plot Examples

The following code creates an interactive diagram via p5js.
<div id="sketch">
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js"></script>
    <script type="text/javascript" src="../_includes/introduction/sketch.js"></script>
</div>

## Interactive Plot Examples

The following code creates an interactive plotly density heatmap and density contour diagram.

{% highlight python %}
fig = px.density_heatmap(
    data,
    x='total_bill',
    y='tip',
    marginal_x='histogram',
    marginal_y='histogram',
    nbinsx=20,
    nbinsy=20
)
fig = px.density_contour(
    data,
    x='total_bill',
    y='tip',
    nbinsx=20,
    nbinsy=20
)
fig.update_traces(contours_coloring='fill')
{% endhighlight %}

{% include introduction/density_contour_demo.html %}

{% include introduction/density_heatmap_demo.html %}

The following code creates an interactive plotly scatterplot.

{% highlight python %}
fig = px.scatter(
    data,
    x='variable_x',
    y=['variable_1', 'variable_2', 'variable_3'],
    title='random relationships',
)
fig.update_xaxes(title_text='variable_x')
fig.update_yaxes(title_text='variable_y')
{% endhighlight %}

{% include introduction/scatterplot_demo.html %}

The following code creates an interactive plotly line graph that can be modified via a slider.

{% highlight python %}
# range of all coefficients
all_coeffs = np.arange(-1, 1, 0.01)

# function used in the plot
def f1(x, c1):
    return (100 - x**2) * np.sin(x / c1)

# pre-computing and tracing the datapoints
for coeff in all_coeffs:
    fig.add_trace(
        go.Scatter(
            x=np.arange(-10, 10, 0.01),
            y=f1(np.arange(-10, 10, 0.01), coeff),
            name=f'{coeff:.2f}',
            line={'color': 'rgb(102, 197, 204)', 'width': 5},
            visible=False
        )
    )
{% endhighlight %}

{% include introduction/interactive_demo.html %}<br/>
## Blog Schedule

This blog will aim to post at minimum two posts per month, although this may vary depending on my schedule, or the COVID situation of the future.