---
layout: post
title: "Presenting at the 13th Alpine Verification Meeting (AVM'19)"
date: 2019-09-09 09:00:00 +0200
categories: [Events]
toc: true
comments: false
image: /assets/img/posts/2019-09-09-alpine-verification-meeting-avm-2019/cover.png
image_alt: Chencheng Liang presenting his early PhD research at AVM 2019
---

In September 2019, I attended the [**13th Alpine Verification Meeting (AVM'19)**](https://avm.sosy-lab.org/pastfuture.php) in **Brno, Czechia**. The meeting took place from **September 9–11, 2019**, and was jointly organized by the [Faculty of Information Technology at Brno University of Technology](https://www.fit.vut.cz/.en) and the [Faculty of Informatics at Masaryk University](https://www.fi.muni.cz/index.html.en).

I also presented my early PhD work, **“Guiding Interpolation for Model Checking by Deep Learning Techniques,”** exploring how machine learning could be used to guide interpolation-based verification.

---

## An Informal Meeting on Formal Verification

The [Alpine Verification Meeting](https://avm.sosy-lab.org/index.php) is an informal research meeting focused on current problems in **formal verification**. Rather than following the conventional paper-submission and proceedings format, AVM brings researchers together to share recent, ongoing, or submitted work, discuss open problems, and explore possible collaborations.

The talks reflected the breadth of the verification community, including topics such as:

- automated and software verification  
- symbolic execution and test generation  
- model checking and interpolation  
- program analysis and control-flow reconstruction  
- separation logic, SAT-based synthesis, and probabilistic programs  
- industrial applications of static analysis  

This combination of foundational methods, emerging ideas, and practical verification work made AVM a valuable place to understand how different parts of the field connect.

---

## My Research Talk

My talk presented an early stage of my PhD research on using learning techniques to guide **interpolation-based model checking**. The central idea was to investigate whether machine-learning models could help select promising interpolation strategies, reducing reliance on fixed, hand-designed choices in the verification workflow.

Presenting this work to a specialized verification audience gave me an opportunity to explain the motivation behind the approach, receive questions and feedback, and learn how other researchers viewed the relationship between machine learning and symbolic reasoning. The [slides from the talk](/assets/slides/AVM-19.pdf) are also available on this site.

---

## Moments from AVM'19

<style>
  .avm-photo-gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .avm-photo-gallery figure {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    border-radius: 8px;
    aspect-ratio: 3 / 2;
  }

  .avm-photo-gallery figure > a,
  .avm-photo-gallery figure > img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .avm-photo-gallery img {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    border-radius: 0;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    .avm-photo-gallery {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="avm-photo-gallery">
  <figure>
    <img src="/assets/img/posts/2019-09-09-alpine-verification-meeting-avm-2019/figure-01.jpg" alt="Chencheng Liang presenting to the AVM 2019 audience in a lecture hall" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2019-09-09-alpine-verification-meeting-avm-2019/figure-02.jpg" alt="A research session with speakers and participants at AVM 2019" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2019-09-09-alpine-verification-meeting-avm-2019/figure-03.jpg" alt="AVM 2019 participants talking outside during a break" />
  </figure>
  <figure>
    <img src="/assets/img/posts/2019-09-09-alpine-verification-meeting-avm-2019/figure-04.jpg" alt="A shark sculpture encountered while exploring Brno" />
  </figure>
</div>
