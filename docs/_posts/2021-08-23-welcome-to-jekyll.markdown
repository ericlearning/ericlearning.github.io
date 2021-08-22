---
layout: post
title:  "Introduction to the Blog"
date:   2021-08-23 00:58:35 +0900
categories: Misc
---
Hello! Covid Aggregate is a blog that aggregates various researches on COVID-19, especially on data science aspects such as forecasts or projection models. The purpose of this blog is to aggregate countless research papers on these topics, distill them down to their main ideas, and explain them in a data science perspective with interactive visualizations.

## Blog Setup
This blog is hosted on [github pages](pages.github.com), and uses [Jekyll](https://jekyllrb.com/) to generate the static website from markdown. Interactive plots are mainly created using [plotly](https://plotly.com/), an interactive plotting library for Python. It is then exported to html, and embedded into markdown.

{% include test.html %}
\
This example is generated with the following configuration (details omitted):

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

Above is a simple demonstration of interactive plots using plotly. Use the sliders to modify the coefficients. All the assets and plots are saved in the `docs/_includes` directory, while codes used will be saved in `experiments` as a jupyter notebook.



To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
