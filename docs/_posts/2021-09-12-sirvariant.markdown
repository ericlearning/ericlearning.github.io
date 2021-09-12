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

**1. Individuals go through $$S \to I \to R$$**
* $$I \to R$$ is a reasonable assumption in measeles, which lets those infected within [retain their immunity](https://www.bphc.org/whatwedo/infectious-diseases/Infectious-Diseases-A-to-Z/Pages/Measles.aspx); Hence remaining forever [^1] at $$R$$.
* $$S \to I$$ is not a reasonable assumption in many diseases. For example, the [viral load of a COVID-19 patient peaks few days before the symptom starts](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7929560/). It takes time to transition from $$S \to I$$.
* Staying on $$R$$ is not reasonable, as people sometimes get reinfected from the disease they recovered from.

[^1]: There are rare cases of measle reinfection, but we are talking in general here.

**2. Population remains constant: $$S(t) + I(t) + R(t) = N$$**
* This fails to account for events such as child birth and death (these are called vital dynamics).

**3. There is a homogeneous mixing of the population (everyone has equal chance of contact).**
* People form different subgroups that they interact more often than others.
* Individuals have difference in how frequently they interact with others.
* Population density is not homogeneous across areas.

**The SIR Model evolves over time as such:**

$$\frac{\mathrm{d} S}{\mathrm{d} t} = -\frac{\beta I S}{N}$$

$$\frac{\mathrm{d} I}{\mathrm{d} t} = \frac{\beta I S}{N} - \gamma I$$

$$\frac{\mathrm{d} R}{\mathrm{d} t} = \gamma I$$

Of course, 


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