---
layout: post
title: "PhD Defense Completed 🎓"
date: 2025-05-06 18:00:00 +0200
categories: [News]
toc: true
comments: false
image: /assets/img/posts/2025-05-06-phd-defense/cover.jpg
image_alt: Thesis cover
---

I am happy to share that I have successfully defended my PhD thesis, titled **“[Learning to Guide Automated Reasoning: A GNN-Based Framework](https://www.uu.se/en/department/information-technology/events/archive/2025-05-06-doctoral-thesis-defence-chencheng-liang-learning-to-guide-automated-reasoning-a-gnn-based-framework).”**

## Defense Details

- **Date**: 6 May 2025  
- **Time**: 13:15  
- **Location**: [Room 10132 Häggsalen, Ångström](https://use.mazemap.com/#v=1&config=uu&campusid=49&zlevel=1&center=17.647891,59.838010&zoom=18&sharepoitype=poi&sharepoi=389932) 

---

- **Opponent**: Prof. [Stephan Schulz](https://www.dhbw-stuttgart.de/studium/bachelor-studienangebot/technik/informatik/ansprechpersonen/prof-dr-rer-nat-stephan-schulz/), DHBW Stuttgart, Germany 
- **Supervisor**: 
  - Prof. [Philipp Rümmer](http://www.philipp.ruemmer.org/), Uppsala University, Sweden  & University of Regensburg, Germany
  - Prof. [Yi Wang](https://user.it.uu.se/~wangyi/), Uppsala University, Sweden  
  - Research Scientist [Marc Brockschmidt](https://www.linkedin.com/in/marc-brockschmidt-995866b0/?originalSubdomain=uk), Google DeepMind, UK
- **Chair**: Prof. [Bengt Jonsson](https://user.it.uu.se/~bengt/), Uppsala University, Sweden   
- **Committee**:  
  - Prof. [Mihaela Sighireanu](https://www.irif.fr/~sighirea/), ENS Paris-Saclay, France 
  - Reader [Konstantin Korovin](https://korovin.gitlab.io/), University of Manchester, U.K.  
  - Prof. [Christian Rohner](https://www.uu.se/en/contact-and-organisation/staff?query=N3-454), Uppsala University, Sweden  
  - Prof. [Tobias Wrigstad](https://wrigstad.com/), Uppsala University, Sweden

---


## Short Introduction

Symbolic solvers rely on hand‑crafted heuristics that often fail to generalize. This thesis replaces or augments them with learned guidance: Graph Neural Networks (GNNs) trained on graph representations of Constrained Horn Clauses and word equations. Integrated into a CHC solver and a word‑equation solver, the models guide clause and branch selection and deliver consistent speedups, with practical techniques (caching, hybrid heuristics, selective queries) to control overhead. The results point to scalable, data‑driven heuristics for formal methods and motivate extensions to models, datasets, and the word‑equation pipeline.


- Online record in [DiVA](https://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1944055&dswid=-2900), [Slides](/assets/slides/defense.pdf)

## Moments

A few moments from the defense day, from preparing and signing copies of the thesis to celebrating with colleagues, friends, and members of the defense committee.

<div class="defense-moments-gallery">
  <figure class="portrait">
    <img src="/assets/img/posts/2025-05-06-phd-defense/figure-01.jpg" alt="Displaying copies of the thesis before the defense" />
  </figure>
  <figure class="landscape">
    <img src="/assets/img/posts/2025-05-06-phd-defense/figure-02.jpg" alt="A gathering with colleagues and friends after the defense" />
  </figure>
  <figure class="portrait">
    <img src="/assets/img/posts/2025-05-06-phd-defense/figure-03.jpg" alt="Signing a copy of the thesis" />
  </figure>
  <figure class="landscape">
    <img src="/assets/img/posts/2025-05-06-phd-defense/figure-04.jpg" alt="Group photo with the opponent, committee, chair, and supervisors" />
  </figure>
  <figure class="portrait">
    <img src="/assets/img/posts/2025-05-06-phd-defense/figure-05.jpg" alt="Conversation with guests following the defense" />
  </figure>
  <figure class="portrait">
    <img src="/assets/img/posts/2025-05-06-phd-defense/figure-06.jpg" alt="Signing and sealing a copy of the thesis" />
  </figure>
  <figure class="portrait solo">
    <img src="/assets/img/posts/2025-05-06-phd-defense/figure-07.png" alt="Celebrating the completed PhD defense" />
  </figure>
</div>

---

## At Carolina Rediviva

<div class="thesis-library-gallery">
  <figure class="wide">
    <img src="/assets/img/posts/2025-05-06-phd-defense/thesis-cover.jpg" alt="Front and back cover of the PhD thesis" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2025-05-06-phd-defense/library-01.jpg" alt="The thesis displayed among new dissertations at Carolina Rediviva" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2025-05-06-phd-defense/library-02.jpg" alt="A closer view of the thesis on display at Carolina Rediviva" />
  </figure>
</div>

<p class="gallery-caption">The thesis was submitted to Carolina Rediviva, Uppsala University Library, where it was displayed among the library’s newly published dissertations.</p>

<style>
  .defense-moments-gallery,
  .thesis-library-gallery {
    display: grid;
    gap: 0.8rem;
    margin: 1.25rem 0;
  }

  .defense-moments-gallery {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-flow: dense;
    align-items: start;
  }

  .defense-moments-gallery figure,
  .thesis-library-gallery figure {
    margin: 0;
    overflow: hidden;
    border-radius: 0.45rem;
    background: var(--card-bg);
  }

  .defense-moments-gallery .landscape {
    grid-column: span 2;
    aspect-ratio: 3 / 2;
  }

  .defense-moments-gallery .portrait {
    aspect-ratio: 3 / 4;
  }

  .defense-moments-gallery .solo {
    grid-column: 2 / span 2;
    width: 50%;
    justify-self: center;
  }

  .defense-moments-gallery img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thesis-library-gallery img {
    display: block;
    width: 100%;
    height: auto;
  }

  .thesis-library-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .thesis-library-gallery .wide {
    grid-column: 1 / -1;
  }

  .gallery-caption {
    margin-top: -0.25rem;
    color: var(--text-muted-color);
    font-size: 0.9rem;
    font-style: italic;
    text-align: center;
  }

  @media (max-width: 576px) {
    .defense-moments-gallery,
    .thesis-library-gallery {
      grid-template-columns: 1fr;
    }

    .defense-moments-gallery .landscape,
    .defense-moments-gallery .solo,
    .thesis-library-gallery .wide {
      grid-column: auto;
    }

    .defense-moments-gallery .solo {
      width: 100%;
    }
  }
</style>
