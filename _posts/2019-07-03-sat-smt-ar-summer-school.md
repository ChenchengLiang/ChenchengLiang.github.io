---
layout: post
title: "My First PhD Summer School: SAT/SMT/AR 2019 in Lisbon"
date: 2019-07-03 09:00:00 +0100
categories: [Events]
toc: true
comments: false
image: /assets/img/posts/2019-07-03-sat-smt-ar-summer-school/cover.jpg
image_alt: Blue Técnico sign at Instituto Superior Técnico in Lisbon
---

In July 2019, I attended the [**SAT/SMT/AR Summer School 2019**](https://alexeyignatiev.github.io/ssa-school-2019/) in Lisbon, Portugal. It was the first summer school I attended during my PhD, which made the experience especially memorable. Beyond four intensive days of lectures and new research directions, it was an opportunity to meet other early-career researchers, exchange ideas beyond the lecture room, and experience Lisbon together. Looking back, this first summer school became an important early milestone in my PhD journey.

The school took place from **July 3–6, 2019**, at [**Instituto Superior Técnico (IST/UL), University of Lisbon**](https://tecnico.ulisboa.pt/en/), bringing together the three closely connected areas of **Boolean Satisfiability (SAT)**, **Satisfiability Modulo Theories (SMT)**, and **Automated Reasoning (AR)**.

---

## Learning Scope

The program moved from core solving techniques to advanced reasoning methods and real-world applications. Across the four days, the [lecture schedule](https://alexeyignatiev.github.io/ssa-school-2019/schedule.html) covered topics including:

- **SAT solving** — SAT oracles, conflict-driven clause learning, propositional proof complexity, and SAT-based program synthesis  
- **SMT solving** — SMT foundations, theory combination, optimization modulo theories, and SMT-based software verification  
- **Automated reasoning** — first-order reasoning, parallel theorem proving, and interpolation  
- **Knowledge and applications** — knowledge compilation, systematic software analysis, reasoning about cloud infrastructure, and deep learning for theorem proving  

The full [lecture descriptions and materials](https://alexeyignatiev.github.io/ssa-school-2019/lectures.html) showed how these ideas connect: foundational algorithms for logical reasoning can become practical tools for verification, synthesis, optimization, and intelligent systems.

---

## Moments from Lisbon

<style>
  .summer-school-gallery {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
    width: 100%;
    aspect-ratio: 2 / 1;
    margin-top: 1rem;
  }

  .summer-school-gallery figure {
    min-width: 0;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    border-radius: 8px;
  }

  .summer-school-gallery figure:first-child {
    grid-row: 1 / span 2;
  }

  .summer-school-gallery figure > a,
  .summer-school-gallery figure > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .summer-school-gallery img {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    border-radius: 0;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    .summer-school-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: auto auto;
      aspect-ratio: auto;
    }

    .summer-school-gallery figure:first-child {
      grid-column: 1 / -1;
      grid-row: auto;
      aspect-ratio: 4 / 3;
    }

    .summer-school-gallery figure:not(:first-child) {
      aspect-ratio: 4 / 3;
    }
  }
</style>

<div class="summer-school-gallery">
  <figure>
    <img src="/assets/img/posts/2019-07-03-sat-smt-ar-summer-school/figure-02.jpg" alt="Summer school participants together in Lisbon at night" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2019-07-03-sat-smt-ar-summer-school/figure-01.jpg" alt="SAT SMT AR Summer School badge, notebook, pen, and a Portuguese tin of tuna" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2019-07-03-sat-smt-ar-summer-school/figure-03.jpg" alt="A Técnico Lisboa vehicle decorated with mathematical formulas" />
  </figure>
</div>
