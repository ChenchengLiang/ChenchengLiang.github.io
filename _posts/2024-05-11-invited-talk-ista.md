---
layout: post
title: "Invited Talk at ISTA"
date: 2024-05-11 09:00:00 +0200
categories: [Events]
toc: true
comments: false
image: /assets/img/posts/2024-05-11-invited-talk-ista/cover.jpg
image_alt: An outdoor sculpture and research buildings on the ISTA campus
---

On **May 11, 2024**, I visited the [**Institute of Science and Technology Austria (ISTA)**](https://www.ista.ac.at/en/home/) in Klosterneuburg to give an invited talk to the [**Thomas Henzinger Group**](https://ista.ac.at/en/research/henzinger_thomas-group/). I was honored to receive the invitation from [**Emily Yu**](https://emilyyu.nl/), who was then a postdoctoral researcher in the group. Emily's research in formal methods, automated reasoning, hardware model checking, and certification closely connected with my own work on machine learning for program verification. The Henzinger group develops mathematical foundations for the design and verification of complex hardware and software systems, with research spanning model checking, autonomous and cyber-physical systems, and trustworthy AI. These shared interests made ISTA a particularly fitting place to exchange ideas, and I am very grateful to Emily for inviting and hosting me.

---

## Guiding CHC Solving with Graph Neural Networks

My talk, **“Guiding Constraint Horn Clauses Solving using Graph Neural Networks,”** focused on how deep learning can support formal verification. I first introduced how program-verification problems can be encoded as **Constrained Horn Clauses (CHCs)** and why the order in which clauses are processed can influence the performance of CHC solvers.

I then presented our learning-based approach to this ranking problem. We use minimal unsatisfiable subsets of CHCs as supervision and represent the clauses with the **Relational Hyper-Graph Neural Network (R-HyGNN)**. The resulting predictions estimate which clauses are most likely to belong to an unsatisfiable core and can guide solving procedures such as counterexample-guided abstraction refinement and symbolic execution. The visit offered a valuable opportunity to discuss how graph learning, automated reasoning, and formal verification can complement one another with researchers working on closely related questions.

The [presentation slides](/assets/slides/ISTA-2024.pdf) are available online. Related technical details can also be found in our paper, [**“Boosting Constrained Horn Solving by Unsat Core Learning”**](/assets/paper-pdf/VMCAI-2024.pdf).

---

## Moments from ISTA

<style>
  .ista-photo-gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .ista-photo-gallery figure {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    border-radius: 8px;
    aspect-ratio: 4 / 3;
  }

  .ista-photo-gallery figure > a,
  .ista-photo-gallery figure > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .ista-photo-gallery img {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    border-radius: 0;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    .ista-photo-gallery {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="ista-photo-gallery">
  <figure>
    <img src="/assets/img/posts/2024-05-11-invited-talk-ista/figure-01.jpg" alt="A welcome envelope prepared for Chencheng Liang at ISTA" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2024-05-11-invited-talk-ista/figure-02.jpg" alt="A rainy view across the ISTA campus" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2024-05-11-invited-talk-ista/figure-03.jpg" alt="Research buildings beside a pond on the ISTA campus" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2024-05-11-invited-talk-ista/figure-04.jpg" alt="Klosterneuburg-Weidling railway station near ISTA" />
  </figure>
</div>
