---
layout: post
title:  "Variants of SIR Model"
date:   2021-09-12 00:58:35 +0900
categories: Misc
mathjax: true
p5js: true
---

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sylvester/0.1.3/sylvester.js"></script>
<script type="text/javascript" src="{{ "assets/p1/libraries/grafica.min.js" | relative_url }}"></script>
<script type="text/javascript" src="{{ "assets/p1/models/models.js" | relative_url }}"></script>
<script type="text/javascript" src="{{ "assets/p1/odesolver/rungekutta.js" | relative_url }}"></script>
<script type="text/javascript" src="{{ "assets/p1/odesolver/utils.js" | relative_url }}"></script>
<script type="text/javascript" src="{{ "assets/p1/visualization/utils.js" | relative_url }}"></script>

In the last [post](example.com), we've learned about modeling an infectious disease using a simple set of ODE (ordinary differential equations) called the **SIR Model**. Please read the previous post for better context on the subject.

Under certain assumptions about the population and the infectious disease, the SIR Model segmented the population into $$S$$ (susceptible), $$I$$ (infected), $$R$$ (recovered) and had rules on how they change over time.

**Under the following [Assumptions](https://jamanetwork.com/journals/jama/fullarticle/2766672):**

* Individuals go through $$S \to I \to R$$ <br/>
* Population remains constant: $$S(t) + I(t) + R(t) = N$$ <br/>
* There is a homogeneous mixing of the population (everyone has equal chance of contact).

**The SIR Model evolves over time as such:**

$$\frac{\mathrm{d} S}{\mathrm{d} t} = -\frac{\beta I S}{N}$$

$$\frac{\mathrm{d} I}{\mathrm{d} t} = \frac{\beta I S}{N} - \gamma I$$

$$\frac{\mathrm{d} R}{\mathrm{d} t} = \gamma I$$

Of course, there are many cases where **these assumptions do not hold**.
* $$S \to I$$ is not a reasonable assumption in many diseases. For example, the [viral load of a COVID-19 patient peaks few days before the symptom starts](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7929560/). It takes time to transition from $$S \to I$$. Also, cases of reinfection make the assumotion of staying on $$R$$ unreasonable.

* Constant population fails to account for events such as child birth and death (these are called vital dynamics), and makes the model only useful in cases where the vital dynamics are insignificant compared to the infection cases.

* The homogenity assumption doesn't hold if people form different subgroups that they interact more often than others. Individuals also have difference in how frequently they interact with others, and population density is not homogeneous across areas.

Therefore, the epidemiologists must choose a set of assumptions that satisfy the condition of the disease they are trying to model. Here, we will discuss some of the variants of the SIR model and their assumptions.

## Susceptible, Infectious, Recovered (with Vital Dynamics)
$$\frac{\mathrm{d} S}{\mathrm{d} t} = \Lambda - \mu S -\frac{\beta I S}{N}$$

$$\frac{\mathrm{d} I}{\mathrm{d} t} = \frac{\beta I S}{N} - \gamma I - \mu I$$

$$\frac{\mathrm{d} R}{\mathrm{d} t} = \gamma I - \mu R$$

## Susceptible, Infectious, Recovered, Susceptible
$$\frac{\mathrm{d} S}{\mathrm{d} t} = -\frac{\beta I S}{N}$$

$$\frac{\mathrm{d} I}{\mathrm{d} t} = \frac{\beta I S}{N} - \gamma I$$

$$\frac{\mathrm{d} R}{\mathrm{d} t} = \gamma I$$

## Susceptible, Exposed, Infectious, Recovered
$$\frac{\mathrm{d} S}{\mathrm{d} t} = -\frac{\beta I S}{N}$$

$$\frac{\mathrm{d} I}{\mathrm{d} t} = \frac{\beta I S}{N} - \gamma I$$

$$\frac{\mathrm{d} R}{\mathrm{d} t} = \gamma I$$

## Susceptible, Exposed, Infectious, Recovered, Deceased
$$\frac{\mathrm{d} S}{\mathrm{d} t} = -\frac{\beta I S}{N}$$

$$\frac{\mathrm{d} I}{\mathrm{d} t} = \frac{\beta I S}{N} - \gamma I$$

$$\frac{\mathrm{d} R}{\mathrm{d} t} = \gamma I$$

<div id="sketch">
    <script type="text/javascript" src="{{ "assets/p1/sir_projection.js" | relative_url }}"></script>
</div><br/>

<div id="sketch2">
    <script type="text/javascript" src="{{ "assets/p1/sirs_projection.js" | relative_url }}"></script>
</div><br/>

<div id="sketch4">
    <script type="text/javascript" src="{{ "assets/p1/seir_projection.js" | relative_url }}"></script>
</div><br/>

<div id="sketch3">
    <script type="text/javascript" src="{{ "assets/p1/sirv_projection.js" | relative_url }}"></script>
</div><br/>