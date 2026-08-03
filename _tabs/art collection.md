---
# the default layout is 'page'
icon: fas fa-palette
order: 4
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
            <h3>Cyber-Fantasy</h3>
            <p>Dynamic Splash</p>
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
            <h3>Neo-Ukiyo-e</h3>
            <p>Hayao Miyazaki</p>
            <span class="image-count">5 images</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collection 3: Minimalist Ink Cats -->
    <div class="gallery-item" data-collection="minimalist-ink">
      <div class="gallery-cover">
        <img src="/assets/img/cats/3/x.png" alt="Minimalist Ink Cat" />
        <div class="gallery-overlay">
          <div class="gallery-info">
            <h3>Neo-Ukiyo-e</h3>
            <p>Akiyuki Shinbo 45 Degree</p>
            <span class="image-count">2 images</span>
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
            <h3>Neo-Ukiyo-e</h3>
            <p>Ink Wash</p>
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
            <h3>Neo-Ukiyo-e</h3>
            <p>Mythic Fantasy</p>
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
            <h3>Neo-Ukiyo-e</h3>
            <p>Akira Kurosawa</p>
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
            <h3>Neo-Ukiyo-e</h3>
            <p>Dunhuang Fresco</p>
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
            <h3>Neo-Ukiyo-e</h3>
            <p>Mystic Splash</p>
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
            <h3>Neo-Ukiyo-e</h3>
            <p>Katsushika Hokusai</p>
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
        <a href="#" onclick="return false;" tabindex="-1">
          <img id="modal-image" src="/assets/img/cats/1/1.png" alt="" />
        </a>
        <div class="modal-nav">
          <button class="nav-btn prev">&#10094;</button>
          <button class="nav-btn next">&#10095;</button>
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
  border-radius: 32px;
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
  z-index: 9999;
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


>Not for commercial use. Licensing available upon request. No redistribution or modification allowed.
{: .prompt-danger }

> In addition to the existing collections, I also provide **customized pet art portrait services**. You can send me photos of your cat or dog, and I will create a series of portraits in similar artistic styles. The final works can be produced as framed prints, tailored to your preferences. 
{: .prompt-tip }


>**For inquiries and commissions, feel free to email me at chencheng.liang2077[at]gmail.com.**
{: .prompt-info }