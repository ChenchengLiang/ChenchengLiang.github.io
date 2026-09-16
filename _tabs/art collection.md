---
# the default layout is 'page'
icon: fas fa-palette
order: 4
---

<link rel="stylesheet" href="{{ '/assets/css/art-gallery.css' | relative_url }}">

Welcome to my digital art gallery, featuring AI-generated cat illustrations in both traditional Ukiyo-e and contemporary styles. Each collection represents a unique artistic exploration of feline beauty and character.  
This work is also published on [RedNote](https://www.xiaohongshu.com/user/profile/5fc62d690000000001008463), a Chinese social networking and e-commerce platform similar to Instagram.

---

## Gallery

<div class="art-gallery">
  <div class="art-gallery-grid" id="art-gallery-grid">
    {% for collection in site.data.art_collections %}
      {% assign image_count = collection.images | size %}
      <button
        type="button"
        class="art-gallery-card"
        data-collection="{{ collection.id }}"
        aria-label="Open {{ collection.card_title }} collection, {{ image_count }} images"
      >
        <span
          class="art-gallery-cover"
          role="img"
          aria-label="{{ collection.cover_alt }}"
          style="--art-gallery-cover: url('{{ collection.images[0] | relative_url }}')"
        ></span>
        <span class="art-gallery-overlay" aria-hidden="true">
          <span class="art-gallery-title">{{ collection.card_title }}</span>
          <span class="art-gallery-subtitle">{{ collection.card_subtitle }}</span>
          <span class="art-gallery-count">{{ image_count }} images</span>
        </span>
      </button>
    {% endfor %}
  </div>
</div>

<div
  class="art-gallery-modal"
  id="art-gallery-modal"
  role="dialog"
  aria-modal="true"
  aria-labelledby="art-gallery-modal-title"
  hidden
>
  <div class="art-gallery-dialog" role="document">
    <button type="button" class="art-gallery-close" aria-label="Close gallery">×</button>
    <div class="art-gallery-modal-layout">
      <div class="art-gallery-image-stage">
        <div class="art-gallery-image-slot" id="art-gallery-image-slot"></div>
        <div class="art-gallery-navigation">
          <button type="button" class="art-gallery-nav art-gallery-prev" aria-label="Previous image">&#10094;</button>
          <button type="button" class="art-gallery-nav art-gallery-next" aria-label="Next image">&#10095;</button>
        </div>
      </div>
      <div class="art-gallery-info">
        <div class="art-gallery-modal-title" id="art-gallery-modal-title"></div>
        <p class="art-gallery-modal-description" id="art-gallery-modal-description"></p>
        <div class="art-gallery-counter" aria-live="polite">
          <span id="art-gallery-current-image">1</span> / <span id="art-gallery-total-images">1</span>
        </div>
      </div>
    </div>
  </div>
</div>

<script type="application/json" id="art-gallery-data">{{ site.data.art_collections | jsonify }}</script>
<script src="{{ '/assets/js/art-gallery.js' | relative_url }}" defer></script>

> Not for commercial use. Licensing available upon request. No redistribution or modification allowed.
{: .prompt-danger }
