---
layout: post
title:  "Paper Review: Complexity of the Basic Reproduction Number"
date:   2021-09-11 00:58:35 +0900
categories: Misc
mathjax: true
p5js: false
---

(A hopefully easy-to-understand summary of the paper [Complexity of the Basic Reproduction Number](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6302597/) with interactive visualizations)

With the recent pandemic, **Basic Reproduction Number** ($$R_0$$) is a word thrown around a lot in news publications, journals, and other media sources. Often this number is referenced in varying context, and used informally to indicate very different aspects of the pandemic. However, $$R_0$$ is a biological reality with a value that only means a single concept.

**It is/does not:**
* Represent the severity of the symptoms
* Represent the speed of the infection
* Represent a change of something over time
* Interchangable with Effective Reproduction Number ($$R_t$$)
* Change with vaccination and other medical interventions
* Stay constant across time, demographic, location

**It does**
* Change with social distancing
* Change with quarantine

The accurate definition of **Basic Reproduction Number** is the number of secondary cases from a single case assuming a completely susceptible population.

Despite the clear definition, $$R_0$$ is often called in incorrect names. Although names aren't the biggest concerns among the epidemiologists with a clear concept of what $$R_0$$ actually represents, it does matter for the general public.

For example, George MacDonald, who [first introduced $$R_0$$](https://www.cabdirect.org/?target=%2fcabdirect%2fabstract%2f19581000237) called it basic case reproduction **rate**. And some sources still use the word **rate** when representing $$R_0$$. However, **rate** creates an impression that it describes something over time. Instead, $$R_0$$ only describes the number of cases per case. Hence rather than calling it a **rate**, it is better to call it a number (or ratio).

Although we have a clear definition of $$R_0$$, obtaining $$R_0$$ is not so clear. The values of COVID-19's $$R_0$$ from official sources are a result **numerous analyses and meta-analyses**. There isn't a single $$R_0$$ value that the researches have agreed upon, and that is generally the case for most infectious diseases. To understand why, lets take a deeper look at the factors that determine $$R_0$$. Generally, there are three factors (terms) that determine $$R_0$$.

$$R_0 = \tau \cdot \bar{c} \cdot d$$

$$\tau$$ represents **transmissability** (probability of infection).\\
$$\bar{c}$$ represents **rate of contact** between susceptible and infected.\\
$$d$$ represents **duration of infectiousness**.

Other factors include the [epidemiological triad](https://www.cdc.gov/csels/dsepd/ss1978/lesson1/section8.html), such as the agent, host, and environmental factors. All these factors may also fluctate over time, if the interaction pattern changes. For example, calculating the $$R_0$$ after a social distancing policy will cause the number to drop. Because of these numerous factors that contribute to the true $$R_0$$ value, the estimates vary across researches depending on the methodology, target location, period, etc.

There are generally two methods of measuring $$R_0$$, counting directly or using data driven approaches.

The first method is quite straightforward; following the definitions of $$R_0$$, **simply count** the number of new cases that happen from a single infected person. Beyond the early stage of the epidemic, doing such at a large scale is difficult even with active surveillance and contact tracing. While doing an exact count of the infections may be possible in the early stage, it is more likely that the data collection system is not in place yet.

Hence, most studies (and certainly for COVID-19) rely on **data driven approaches**. Based on certain assumptions, researchers create a mathematical model that estimates the population's evolution over time, and analyze this theoretical model to derive $$R_0$$ from it. I have a [separate post](example.com) on some of its examples.

For the sake of the argument, we will view this model as a simple blackbox that only estimates the number of infected people. Let $$F(t, \theta_1, \theta_2)$$ be a function that gives the number of infected people given $$t$$ (time), and some parameters $$(\theta_1, \theta_2)$$ such as birth rate, transmissability, etc. Let's say that the epidemiologists have already collected the real data for the number of infected people given $$t$$ (time), such as $$D(t)$$. Then, our goal is to **bring the model closer to the real data** $$D(t) \sim F(t, \theta_1, \theta_2)$$ by finding the appropriate values for $$\theta_1$$ and $$\theta_2$$. With these parameters and an equations based on the type of $$F$$ that is used, the epidemiologist can directly calculate $$R_0 = g(\theta_1, \theta_2)$$

All of this sounds fine in theory, but there are many **factors here that lead to the variation** in the predicted $$R_0$$.

First, high quality $$D(t)$$ is hard to obtain, and is often not available for all components of the model. Models such as the [SEIR](https://docs.idmod.org/projects/emod-hiv/en/latest/model-seir.html) Model requires data for $$S(t), E(t), I(t), R(t)$$. Second, the modeler can make many different decisions about the model's assumptions.

Assumption one, the **population structure**. An [SIR Model](https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology), for example, assumes that all of the population falls under three categories: Susceptible ($$S(t)$$), Infected ($$I(t)$$), and Recovered ($$R(t)$$), while the SEIR Model adds another category: Exposed ($$E(t)$$).

Assumption two, **demographic dynamics** ([vital dynamics](https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SIR_model_with_vital_dynamics_and_constant_population)) such as death and birth. If the modeler aims to model a highly infectious and non-lethal disease for a short amount of time, the relative number of death and birth would be insignificant compared to the infection trend. But if the modeler uses data tracked over a very long time, it may be necessary to take the vital dynamics in consideration.

Assumption three, **population mixing pattern**. If the modeler assumes that there is a homogeneous mixing, everyone has an equal chance of contracting the disease. In a heterogeneous mixing assumption, the chance varies depending on the demographic (age, social group, resident, job ...)

Given these assumptions, the modeler may choose between a **deterministic model** or a **stochastic model**. The deterministic model always produces the same outcome (such as solving an ODE), while the stochastic model produces a distribution of predictions by running the model multiple times and following the probability distribution.

It is also important to acknowledge that parameters produced through these steps are **educated guesses**, as it (generally) does not reveal any causal relationships between different components of the model; these parameters simply fit the data well. Furthermore, complex models with lots of parameters would have a wider range of possible parameters that could fit the data, creating a wide range of equally plausible $$R_0$$ values.