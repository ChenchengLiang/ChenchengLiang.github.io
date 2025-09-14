---
layout: post
title: "Project CS 2024: Industry Collaboration with Ericsson 📶"
date: 2024-12-06 18:00:00 +0200
categories: [Teaching]
toc: true
comments: false
image: /assets/img/project-cs-2024.png
image_alt: CS Project 2024 Group
---

# Presenting an LLM-based Project at Ericsson HQ, Stockholm

On December 6, 2024, I had the pleasure of supervising a talented group of students who successfully completed their **Project CS** course (30 credits) with a final presentation at **Ericsson HQ in Stockholm**.

---

## Overview of the Project

They presented a research project, [*Optimizing Large Language Models for Domain-Specific Tasks*](https://zenodo.org/records/15575483), conducted at Uppsala University, focusing on optimizing **Large Language Models (LLMs)** for the **telecommunications domain**.

The project uses the **[TSpec-LLM dataset](https://arxiv.org/abs/2406.01768)**, a large collection of 3GPP telecommunications standards documents, and addresses the challenge of adapting general-purpose LLMs to highly specialized technical domains. The work involves:

- **Data preprocessing**: Designing a modular pipeline to clean and structure domain data, making it suitable for machine learning tasks.  
- **Model training**: Fine-tuning pre-trained **T5 (flan-t5-base)** models on this domain-specific dataset for question-answering tasks.  
- **Alternative approach comparison**: Implementing and evaluating **Retrieval-Augmented Generation (RAG)** systems as a contrasting strategy.  
- **Evaluation**: Comparing fine-tuned models and RAG using **BLEU scores** and **semantic cosine similarity** (via Sentence-BERT) to measure both syntactic and semantic accuracy.  
- **Implementation**: Developing both **LangGraph-based** and **RAG-based** chatbot systems, integrating data preprocessing, retrieval pipelines, and response generation modules.

---

## Key Findings

- **Fine-tuned models** achieved strong semantic accuracy, especially for tasks with well-defined, closed datasets.  
- **RAG models** performed better for knowledge-intensive or context-rich tasks but incurred higher computational costs and latency.  
- **Fine-tuned small models** (like Flan-T5 Small) showed promise for deployment in resource-constrained environments (e.g., offline devices).  
- The study emphasizes **cosine similarity** as a more reliable evaluation metric than BLEU for semantic tasks.



---

## Student Team

I'm proud to have supervised this exceptional group of students:

- **[Mahtab Mirhaj](https://www.linkedin.com/in/mahtab-mirhaj/?originalSubdomain=se)**
- **[Oguzhan Ersoy](https://www.linkedin.com/in/o%C4%9Fuzhan-ersoy-6a3a4a135/?originalSubdomain=se)**
- **[Yixin Huang](https://www.linkedin.com/in/yixin-huang-20010313y/)**
- **[Shiqi Shu](https://www.linkedin.com/search/results/all/?keywords=Shiqi%20Shu&origin=GLOBAL_SEARCH_HEADER&sid=wFA)**

Each student brought unique perspectives and skills to the project, contributing to its overall success.



---
<!-- 
<img src="/assets/img/project-cs-2024.png" alt="CS Project 2024 Group" style="max-width: 100%; height: auto; border-radius: 6px;" /> -->
