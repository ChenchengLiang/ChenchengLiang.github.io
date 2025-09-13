---
# the default layout is 'page'
icon: fas fa-palette
order: 3
---

Welcome to my digital art gallery, featuring AI-generated cat illustrations in both traditional Ukiyo-e and contemporary styles. Each collection represents a unique artistic exploration of feline beauty and character.  
This work is also published on [RedNote](https://www.xiaohongshu.com/user/profile/5fc62d690000000001008463), a Chinese social networking and e-commerce platform similar to Instagram.

---

## Gallery

<div class="art-gallery">
  <div class="gallery-grid">
    <!-- Collection 1: Traditional Ukiyo-e Cats -->
    <div class="gallery-item" data-collection="ukiyo-e-1">
      <div class="gallery-cover">
        <img src="/assets/img/cats/1/1.png" alt="Traditional Ukiyo-e Cat 1" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Claws tear the void</h3>
            <p>Worlds break asunder</p>
            <span class="image-count">6 images</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 2: Wild European Cats -->
    <div class="gallery-item" data-collection="wild-european">
      <div class="gallery-cover">
        <img src="/assets/img/cats/2/1.png" alt="Wild European Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Red fox in rain</h3>
            <p>Mountains as scroll</p>
            <span class="image-count">5 images</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 3: Minimalist Ink Cats -->
    <div class="gallery-item" data-collection="minimalist-ink">
      <div class="gallery-cover">
        <img src="/assets/img/cats/3/u2667282477_httpss.mj.runWpI773UvTNw_A_traditional_ukiyo-e_st_7dea69b6-3e4e-4bbd-8f9f-de9a2da9c66c_0.png" alt="Minimalist Ink Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>A glimpse of brilliance</h3>
            <p>A fleeting glance</p>
            <span class="image-count">1 image</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 4: Black & White Striped Cats -->
    <div class="gallery-item" data-collection="black-white-striped">
      <div class="gallery-cover">
        <img src="/assets/img/cats/4/1.png" alt="Black & White Striped Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Crimson clouds roll</h3>
            <p>Blades move free</p>
            <span class="image-count">4 images</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 5: Dynamic Action Cats -->
    <div class="gallery-item" data-collection="dynamic-action">
      <div class="gallery-cover">
        <img src="/assets/img/cats/5/1.png" alt="Dynamic Action Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Eyes vast as oceans</h3>
            <p>Thunder held in silence</p>
            <span class="image-count">3 images</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 6: Middle-aged Cats -->
    <div class="gallery-item" data-collection="middle-aged">
      <div class="gallery-cover">
        <img src="/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_00daae3c-9f2e-4153-b803-66a680a026b5_1.png" alt="Middle-aged Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Endless mists drift</h3>
            <p>Fierce winds cry</p>
            <span class="image-count">5 images</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 7: Traditional Ukiyo-e Collection -->
    <div class="gallery-item" data-collection="traditional-ukiyo-e">
      <div class="gallery-cover">
        <img src="/assets/img/cats/7/1.png" alt="Traditional Ukiyo-e Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Storming sands swirl</h3>
            <p>A lone shape rides high</p>
            <span class="image-count">4 images</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 8: Wild Forest Cats -->
    <div class="gallery-item" data-collection="wild-forest-cats">
      <div class="gallery-cover">
        <img src="/assets/img/cats/8/1.png" alt="Wild Forest Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Shimmering lights collide</h3>
            <p>Truth and phantom entwine</p>
            <span class="image-count">4 images</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 9: Dynamic Movement Cats -->
    <div class="gallery-item" data-collection="dynamic-movement">
      <div class="gallery-cover">
        <img src="/assets/img/cats/9/1.png" alt="Dynamic Movement Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Moonlit tabby shines</h3>
            <p>Wild winds arise</p>
            <span class="image-count">5 images</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal Gallery -->
<div id="gallery-modal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="modal-gallery">
      <div class="modal-image-container">
        <img id="modal-image" src="" alt="" />
        <div class="modal-nav">
          <button class="nav-btn prev" onclick="changeImage(-1)">&#10094;</button>
          <button class="nav-btn next" onclick="changeImage(1)">&#10095;</button>
        </div>
      </div>
      <div class="modal-info">
        <h3 id="modal-title"></h3>
        <p id="modal-description"></p>
        <div class="image-counter">
          <span id="current-image">1</span> / <span id="total-images">1</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.art-gallery {
  margin: 2rem 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.gallery-cover {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-cover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.gallery-info p {
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
  font-size: 0.9rem;
}

.image-count {
  font-size: 0.8rem;
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  margin: 2% auto;
  width: 90%;
  max-width: 1200px;
  height: 90vh;
  display: flex;
  flex-direction: column;
}

.close {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
}

.close:hover {
  opacity: 0.7;
}

.modal-gallery {
  display: flex;
  height: 100%;
  gap: 2rem;
}

.modal-image-container {
  flex: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
}

#modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

.nav-btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  pointer-events: all;
  transition: background 0.3s ease;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  min-height: 3rem;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.modal-info {
  flex: 1;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  overflow-y: auto;
}

.modal-info h3 {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.5rem;
}

.modal-info p {
  margin: 0 0 1.5rem 0;
  color: #666;
  line-height: 1.6;
}

.image-counter {
  font-size: 0.9rem;
  color: #888;
  font-weight: 500;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .modal-content {
    width: 95%;
    height: 95vh;
    margin: 2.5% auto;
  }
  
  .modal-gallery {
    flex-direction: column;
  }
  
  .modal-image-container {
    flex: 3;
  }
  
  .modal-info {
    flex: 1;
    padding: 1rem;
  }
}
</style>

<script>
// Gallery data organized by collections
const galleryData = {
  'ukiyo-e-1': {
    title: 'A leap like a rainbow, fearless in midair',
    description: '爪裂虚空, 破维踏界, 一跃如虹, 凌空无惧',
    images: [
      '/assets/img/cats/1/1.png',
      '/assets/img/cats/1/u2667282477_A_middle-aged_black_and_white_striped_female_cat__4ee1eab4-a1c6-4174-b232-1ec0c206bb5b_0.png',
      '/assets/img/cats/1/u2667282477_A_middle-aged_black_and_white_striped_female_cat__84fcbb6c-61a3-44e7-9d5a-5113d3c474d5_3.png',
      '/assets/img/cats/1/u2667282477_A_middle-aged_black_and_white_striped_female_cat__b520de18-efa7-4b7d-bcbb-79d3468d4d9c_0.png',
      '/assets/img/cats/1/u2667282477_A_middle-aged_black_and_white_striped_female_cat__b520de18-efa7-4b7d-bcbb-79d3468d4d9c_1.png',
      '/assets/img/cats/1/u2667282477_A_middle-aged_black_and_white_striped_female_cat__ded69eaa-9ab1-4498-b822-6ac26a885677_0.png'
    ]
  },
  'wild-european': {
    title: 'Lightning form, chasing the wind',
    description: '赤狐烟雨, 山海绘卷, 身形如电, 踏影逐风',
    images: [
      '/assets/img/cats/2/1.png',
      '/assets/img/cats/2/u2667282477_httpss.mj.runjBjHXi_GhcQ_A_black_striped_European_2a497cdf-e62f-4938-a580-de56c5f1e8a5_3.png',
      '/assets/img/cats/2/u2667282477_httpss.mj.runjZKsExTVhZU_A_traditional_ukiyo-e_st_20198515-ada4-42f5-acf8-98fb492d87d6_1.png',
      '/assets/img/cats/2/u2667282477_httpss.mj.runjZKsExTVhZU_A_traditional_ukiyo-e_st_a57fc5e8-5c5e-4f82-9898-5b2c96fd3226_2.png',
      '/assets/img/cats/2/u2667282477_httpss.mj.runjZKsExTVhZU_A_traditional_ukiyo-e_st_bb654ca7-e759-4b84-aaf8-86a34dc18f4f_0.png'
    ]
  },
  'minimalist-ink': {
    title: 'A master’s contempt',
    description: '来自主子的惊鸿一瞥',
    images: [
      '/assets/img/cats/3/u2667282477_httpss.mj.runWpI773UvTNw_A_traditional_ukiyo-e_st_7dea69b6-3e4e-4bbd-8f9f-de9a2da9c66c_0.png'
    ]
  },
  'black-white-striped': {
    title: 'Twin moons in eyes, chasing shadows aloft.',
    description: '云卷赤焰, 游刃无羁, 双瞳似月, 逐影凌空',
    images: [
      '/assets/img/cats/4/1.png',
      '/assets/img/cats/4/u2667282477_httpss.mj.run3DhE7LQu_Ek_A_traditional_ukiyo-e_st_392a0b21-d20c-423b-86ee-f88af6c2c712_3.png',
      '/assets/img/cats/4/u2667282477_httpss.mj.runFtiRZBXpA2k_A_wild_black_striped_Eur_098e1afc-728e-4580-81ce-64e2e432ed39_0.png',
      '/assets/img/cats/4/u2667282477_httpss.mj.runFtiRZBXpA2k_A_wild_black_striped_Eur_098e1afc-728e-4580-81ce-64e2e432ed39_2.png'
    ]
  },
  'dynamic-action': {
    title: 'Gaze fierce as fire, lone shadow turned steel.',
    description: '眸深似海, 静纳风雷, 目光如炬, 孤影成锋',
    images: [
      '/assets/img/cats/5/1.png',
      '/assets/img/cats/5/u2667282477_httpss.mj.runHWY7nNDz7go_A_black_and_white_stripe_b7fabf09-b9b0-4144-b074-504c99ae63b0_1.png',
      '/assets/img/cats/5/u2667282477_httpss.mj.runHWY7nNDz7go_A_black_and_white_stripe_b7fabf09-b9b0-4144-b074-504c99ae63b0_3.png'
    ]
  },
  'middle-aged': {
    title: 'Crimson flames in eyes, one roar in glory.',
    description: '烟波渺渺, 风声猎猎, 赤眸冷焰, 一啸风华',
    images: [
      '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_00daae3c-9f2e-4153-b803-66a680a026b5_1.png',
      '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_461249dc-355f-4fa4-8cb5-ff7d7c1f1a9a_1.png',
      '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_461249dc-355f-4fa4-8cb5-ff7d7c1f1a9a_2.png',
      '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_4eb39d9e-306c-41af-85fb-4b4e0bdf10f9_3.png',
      '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_cce5a2f2-c5c9-4058-ab2c-64324710fabb_3.png'
    ]
  },
  'traditional-ukiyo-e': {
    title: 'Eyes ablaze like torches, chasing shadows on the wind.',
    description: '风沙漫卷, 孤影乘云, 炽眸若炬, 踏影随风',
    images: [
      '/assets/img/cats/7/1.png',
      '/assets/img/cats/7/u2667282477_httpss.mj.runjZKsExTVhZU_No_text_no_seal_no_chara_b33925fb-5dd8-4e05-a718-ef1cbcbc90d8_0.png',
      '/assets/img/cats/7/u2667282477_httpss.mj.runqhfRr-DsgaA_A_traditional_ukiyo-e_st_fa0f5079-05fe-46df-994c-2ed445970458_3.png',
      '/assets/img/cats/7/u2667282477_httpss.mj.runWpI773UvTNw_A_traditional_ukiyo-e_st_60357091-2a54-4e32-9354-f8e775d05ebe_2.png',
    ]
  },
  'wild-forest-cats': {
    title: 'Flaming crimson eyes, claws rip the wind.',
    description: '流光溢彩, 虚实相生, 赤瞳如焰, 裂爪生风',
    images: [
      '/assets/img/cats/8/1.png',
      '/assets/img/cats/8/u2667282477_httpss.mj.runOjGTff5Crno_A_wild_black_striped_Eur_bf25943c-0c7d-4356-a563-bb9784167b10_0.png',
      '/assets/img/cats/8/u2667282477_httpss.mj.runOjGTff5Crno_A_wild_black_striped_Eur_bf25943c-0c7d-4356-a563-bb9784167b10_1.png',
      '/assets/img/cats/8/u2667282477_httpss.mj.runTqmAQV7TWeQ_httpss.mj.runWpI773UvTNw_bd2cb93e-db08-4600-a328-5932daea564b_3.png'
    ]
  },
  'dynamic-movement': {
    title: 'Fiery gaze to the heights, rending shadows to blades',
    description: '狸花映月, 荒风骤起, 凌霄炽目, 破影成锋',
    images: [
      '/assets/img/cats/9/1.png',
      '/assets/img/cats/9/u2667282477_httpss.mj.runTqmAQV7TWeQ_httpss.mj.runWpI773UvTNw_7deb607f-2cbf-4090-a8f7-ec0d2f2a3139_1.png',
      '/assets/img/cats/9/u2667282477_httpss.mj.runTqmAQV7TWeQ_httpss.mj.runWpI773UvTNw_90888ac0-0ded-4aa6-97dc-5f84d25f02a4_0.png',
      '/assets/img/cats/9/u2667282477_httpss.mj.runTqmAQV7TWeQ_httpss.mj.runWpI773UvTNw_cf101f33-f271-45e7-b9ee-b8cfa56c4855_0.png',
      '/assets/img/cats/9/u2667282477_httpss.mj.runTqmAQV7TWeQ_httpss.mj.runWpI773UvTNw_d52f3ee6-38ea-43c0-8b65-e01e905749be_0.png'
    ]
  }
};

let currentCollection = '';
let currentImageIndex = 0;

// Open modal when gallery item is clicked
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('gallery-modal');
  const closeBtn = document.querySelector('.close');

  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const collection = this.getAttribute('data-collection');
      openModal(collection);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block') {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        changeImage(-1);
      } else if (e.key === 'ArrowRight') {
        changeImage(1);
      }
    }
  });
});

function openModal(collection) {
  currentCollection = collection;
  currentImageIndex = 0;
  
  const collectionData = galleryData[collection];
  if (!collectionData) return;

  const modal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const currentImageSpan = document.getElementById('current-image');
  const totalImagesSpan = document.getElementById('total-images');

  modalImage.src = collectionData.images[0];
  modalTitle.textContent = collectionData.title;
  modalDescription.textContent = collectionData.description;
  currentImageSpan.textContent = '1';
  totalImagesSpan.textContent = collectionData.images.length;

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('gallery-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function changeImage(direction) {
  const collectionData = galleryData[currentCollection];
  if (!collectionData) return;

  currentImageIndex += direction;
  
  if (currentImageIndex < 0) {
    currentImageIndex = collectionData.images.length - 1;
  } else if (currentImageIndex >= collectionData.images.length) {
    currentImageIndex = 0;
  }

  const modalImage = document.getElementById('modal-image');
  const currentImageSpan = document.getElementById('current-image');
  
  modalImage.src = collectionData.images[currentImageIndex];
  currentImageSpan.textContent = currentImageIndex + 1;
}
</script>
