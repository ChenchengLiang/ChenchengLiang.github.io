---
layout: post
title: "Building Unpack Salary: Making Sense of Employment Costs in Sweden"
date: 2026-09-19 10:00:00 +0200
categories: [Projects]
toc: true
comments: false
image: /assets/img/posts/2026-09-19-unpack-salary/cover.png
image_alt: The English interface of Unpack Salary, showing salary input and annual working-time settings
---

I built [**Unpack Salary**](https://www.unpacksalary.se/en/), a bilingual web app that calculates how a Swedish employment offer translates into total employer cost, gross salary, estimated take-home pay, pension, insurance, and value per working day and hour.

The idea began while I was evaluating roles in Sweden. A spreadsheet soon exposed how many connected rules sit behind those figures—and how easy it is to mix official parameters with assumptions. The app makes those relationships explicit, helping students, researchers, engineers, and international professionals compare offers more clearly.

---

## Turning Rules into an Explainable Model

The central design goal is not simply to return a final number. I wanted each result to remain traceable through the complete chain:

```text
Annual employer cost
→ statutory employer costs, pension and insurance, gross salary
→ estimated tax and net cash income
→ pension-related contributions and projected retirement income
```

Building this model required reconciling sources from Swedish authorities and pension institutions. The current version uses [**2026 employer-contribution rates**](https://www.skatteverket.se/servicelankar/otherlanguages/englishengelska/businessesandemployers/startingandrunningaswedishbusiness/declaringtaxesbusinesses/filingapayereturn/employercontributions.4.2fb39afe18dabf1e4d24a3d.html), [**2026 tax tables**](https://www.skatteverket.se/foretag/arbetsgivare/arbetsgivaravgifterochskatteavdrag/skattetabeller.4.96cca41179bad4b1aa8a46.html), an [**ITP 1** occupational-pension example](https://collectum.se/en/startpage/itp-occupational-pension/itp-itpk-and-tgl/retirement-pension), [current pension premiums and base amounts](https://collectum.se/avtal-och-faktura/faktura-och-premier/aktuella-premier-och-basbelopp), working-time assumptions, and [ECB euro foreign-exchange reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html). Results that rely on a standard scenario or modelling assumption are labelled as estimates rather than universal facts.

This distinction became one of the most important lessons from the project. A useful calculator in a regulated domain needs more than formulas: it needs explicit conditions, versioned parameters, source links, reconciliation checks, and a visible boundary between official rules and modelling assumptions.

---

## Building Unpack Salary

The application accepts a **monthly gross salary**, a **target monthly net salary**, or an **annual employer budget** as its starting point. It then constructs the same underlying cost chain from whichever direction the user begins. Results can be viewed in SEK, EUR, or CNY, while the Swedish rules are always calculated in SEK.

I built the application with **Next.js, React, and TypeScript** as a statically deployed site. Calculations run in the browser, and salary or pension inputs are not sent to a server or stored in an account. The site is free to use, has no advertising, and does not require registration; anonymous site and performance statistics do not include the values entered into the calculator.

The interface is designed as an expandable map rather than a conventional payslip. Users can move from the employer's total cost to individual components, inspect formulas and sources, compare annual and monthly values, and follow pension-related amounts from current contributions to a retirement projection. The [Chinese version](https://www.unpacksalary.se/) and [English version](https://www.unpacksalary.se/en/) share the same calculation engine so that the underlying model remains consistent across languages.

---

## From a Personal Tool to a Useful Product

Unpack Salary is currently a **first interactive Demo**, not payroll software, an official tax calculation, or personal financial advice. Its tax estimate uses a defined standard scenario, ITP 1 is an example rather than a plan that applies to every employer, and the pension projection necessarily includes assumptions about future work and retirement.

The next stage is to make those boundaries progressively narrower: support more personal tax conditions, municipalities, ages, occupational-pension and insurance arrangements, and strengthen the test coverage around the complete user journey. I would like to develop it toward the standard of a dependable public-interest tool—and, if there is a real need and a responsible model for it, potentially a sustainable product.

---

## Inside the Application

<style>
  .unpack-salary-gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
    margin-top: 1rem;
    align-items: start;
  }

  .unpack-salary-gallery figure {
    min-width: 0;
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--main-border-color);
    border-radius: 8px;
    background: var(--card-bg);
  }

  .unpack-salary-gallery figure.wide {
    grid-column: 1 / -1;
  }

  .unpack-salary-gallery img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 !important;
    border-radius: 0;
  }

  .unpack-salary-gallery figcaption {
    padding: 0.55rem 0.7rem;
    color: var(--text-muted-color);
    font-size: 0.85rem;
    line-height: 1.45;
  }

  @media (max-width: 640px) {
    .unpack-salary-gallery {
      grid-template-columns: 1fr;
    }

    .unpack-salary-gallery figure.wide {
      grid-column: auto;
    }
  }
</style>

<div class="unpack-salary-gallery">
  <figure class="wide">
    <img src="/assets/img/posts/2026-09-19-unpack-salary/employer-cost-breakdown.png" alt="Unpack Salary breaking an annual employer budget into statutory employer costs, occupational pension and insurance, and gross salary" />
    <figcaption>The employer-cost view keeps the complete budget reconciled while exposing each major branch.</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/posts/2026-09-19-unpack-salary/occupational-pension-insurance.png" alt="Detailed occupational-pension and collective-insurance cards with explanations, formulas, sources, and time averages" />
    <figcaption>Each component can reveal its explanation, formula, source, and time-based values.</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/posts/2026-09-19-unpack-salary/pension-projection.png" alt="A four-stage pension projection from current contributions to estimated monthly retirement income" />
    <figcaption>The pension view separates current payments, accrued rights, projected balances, and estimated income.</figcaption>
  </figure>
  <figure class="wide">
    <img src="/assets/img/posts/2026-09-19-unpack-salary/monthly-pension-breakdown.png" alt="Estimated monthly pension divided into six public, occupational, and existing-rights components" />
    <figcaption>The projected monthly amount remains broken down into its individual components and assumptions.</figcaption>
  </figure>
</div>
