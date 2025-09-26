// assets/js/art-gallery.js
(function () {
    // 仅在 Art-Collection 页面启用，避免污染其它页面
    if (!location.pathname.toLowerCase().includes('art-collection')) return;
  
    // —— 你的 galleryData 放这里（整段粘过来） ——
    const galleryData = {   
        'ukiyo-e-1': {
        title: '爪裂虚空, 破维踏界',
        description: '一跃如虹, 凌空无惧',
        images: [
          '/assets/img/cats/1/1.png',
          '/assets/img/cats/1/a.png',
          '/assets/img/cats/1/b.png',
          '/assets/img/cats/1/c.png',
          '/assets/img/cats/1/d.png',
          '/assets/img/cats/1/e.png'
        ]
      },
      'wild-european': {
        title: '赤狐烟雨, 山海绘卷',
        description: '身形如电, 踏影逐风',
        images: [
          '/assets/img/cats/2/1.png',
          '/assets/img/cats/2/2.png',
          '/assets/img/cats/2/3.png',
          '/assets/img/cats/2/4.png',
          '/assets/img/cats/2/5.png'
        ]
      },
      'minimalist-ink': {
        title: 'A master’s contempt',
        description: '来自主子的惊鸿一瞥',
        images: [
          '/assets/img/cats/3/x.png',
          '/assets/img/cats/3/y.png'
        ]
      },
      'black-white-striped': {
        title: '云卷赤焰, 游刃无羁',
        description: '双瞳似月, 逐影凌空',
        images: [
          '/assets/img/cats/4/1.png',
          '/assets/img/cats/4/2.png',
          '/assets/img/cats/4/3.png',
          '/assets/img/cats/4/4.png'
        ]
      },
      'dynamic-action': {
        title: '眸深似海, 静纳风雷',
        description: '目光如炬, 孤影成锋',
        images: [
          '/assets/img/cats/5/1.png',
          '/assets/img/cats/5/u2667282477_httpss.mj.runHWY7nNDz7go_A_black_and_white_stripe_b7fabf09-b9b0-4144-b074-504c99ae63b0_1.png',
          '/assets/img/cats/5/u2667282477_httpss.mj.runHWY7nNDz7go_A_black_and_white_stripe_b7fabf09-b9b0-4144-b074-504c99ae63b0_3.png'
        ]
      },
      'middle-aged': {
        title: '烟波渺渺, 风声猎猎',
        description: '赤眸冷焰, 一啸风华',
        images: [
          '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_00daae3c-9f2e-4153-b803-66a680a026b5_1.png',
          '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_461249dc-355f-4fa4-8cb5-ff7d7c1f1a9a_1.png',
          '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_461249dc-355f-4fa4-8cb5-ff7d7c1f1a9a_2.png',
          '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_4eb39d9e-306c-41af-85fb-4b4e0bdf10f9_3.png',
          '/assets/img/cats/6/u2667282477_httpss.mj.runjZKsExTVhZU_A_wild_black_striped_Eur_cce5a2f2-c5c9-4058-ab2c-64324710fabb_3.png'
        ]
      },
      'traditional-ukiyo-e': {
        title: '风沙漫卷, 孤影乘云',
        description: '炽眸若炬, 踏影随风',
        images: [
          '/assets/img/cats/7/1.png',
          '/assets/img/cats/7/u2667282477_httpss.mj.runjZKsExTVhZU_No_text_no_seal_no_chara_b33925fb-5dd8-4e05-a718-ef1cbcbc90d8_0.png',
          '/assets/img/cats/7/u2667282477_httpss.mj.runqhfRr-DsgaA_A_traditional_ukiyo-e_st_fa0f5079-05fe-46df-994c-2ed445970458_3.png',
          '/assets/img/cats/7/u2667282477_httpss.mj.runWpI773UvTNw_A_traditional_ukiyo-e_st_955a1739-c71c-4472-9004-5a51e7602834_0.png'
        ]
      },
      'wild-forest-cats': {
        title: '流光溢彩, 虚实相生',
        description: '赤瞳如焰, 裂爪生风',
        images: [
          '/assets/img/cats/8/1.png',
          '/assets/img/cats/8/u2667282477_httpss.mj.runOjGTff5Crno_A_wild_black_striped_Eur_bf25943c-0c7d-4356-a563-bb9784167b10_0.png',
          '/assets/img/cats/8/u2667282477_httpss.mj.runOjGTff5Crno_A_wild_black_striped_Eur_bf25943c-0c7d-4356-a563-bb9784167b10_1.png',
          '/assets/img/cats/8/u2667282477_httpss.mj.runTqmAQV7TWeQ_httpss.mj.runWpI773UvTNw_bd2cb93e-db08-4600-a328-5932daea564b_3.png'
        ]
      },
      'dynamic-movement': {
        title: '狸花映月, 荒风骤起',
        description: '凌霄炽目, 破影成锋',
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
  
    // —— 事件委托（点击封面打开 / 点遮罩与叉关闭 / 左右切图） ——
    document.addEventListener('click', function(e) {
      const item = e.target.closest('.gallery-item');
      if (item) { e.preventDefault(); e.stopPropagation();
        openModal(item.getAttribute('data-collection')); return; }
  
      const modal = document.getElementById('gallery-modal');
      if (modal && e.target === modal) { closeModal(); return; }
  
      if (e.target.matches('.close')) { closeModal(); return; }
  
      if (e.target.matches('.nav-btn.prev')) { 
        e.preventDefault();
        e.stopPropagation();
        changeImage(-1); 
        return;
      }
      if (e.target.matches('.nav-btn.next')) { 
        e.preventDefault();
        e.stopPropagation();
        changeImage(1); 
        return;
      }
    });
  
    // —— 键盘导航 —— 
    document.addEventListener('keydown', function(e) {
      const modal = document.getElementById('gallery-modal');
      if (modal && modal.style.display === 'block') {
        if (e.key === 'Escape') closeModal();
        else if (e.key === 'ArrowLeft') changeImage(-1);
        else if (e.key === 'ArrowRight') changeImage(1);
      }
    });
  
    function openModal(collection) {
      console.log('Opening modal for collection:', collection);
      currentCollection = collection;
      currentImageIndex = 0;
  
      const data = galleryData[collection];
      if (!data) {
        console.error('Gallery data not found for collection:', collection);
        return;
      }

      console.log('Collection data:', data);
      console.log('Number of images:', data.images.length);
      console.log('Image paths:', data.images);

      const modal = document.getElementById('gallery-modal');
      const img = document.getElementById('modal-image');
      const title = document.getElementById('modal-title');
      const desc = document.getElementById('modal-description');
      const cur = document.getElementById('current-image');
      const total = document.getElementById('total-images');

      if (!modal || !img || !title || !desc || !cur || !total) {
        console.error('Required modal elements not found');
        return;
      }

      // Preload all images to ensure they're available
      data.images.forEach((imagePath, index) => {
        const preloadImg = new Image();
        preloadImg.src = imagePath;
      });

      img.src = data.images[0];
      title.textContent = data.title;
      desc.textContent = data.description;
      cur.textContent = '1';
      total.textContent = data.images.length;

      // Add error handling for the first image
      img.onerror = function() {
        console.error('Failed to load first image:', data.images[0]);
        // Show modal anyway if image fails to load
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      };
      
      img.onload = function() {
        // Show modal after first image loads
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      };
    }
  
    function closeModal() {
      const modal = document.getElementById('gallery-modal');
      if (modal) modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  
    function changeImage(direction) {
      const data = galleryData[currentCollection];
      if (!data) {
        console.error('Gallery data not found for current collection:', currentCollection);
        return;
      }

      currentImageIndex += direction;
      if (currentImageIndex < 0) currentImageIndex = data.images.length - 1;
      else if (currentImageIndex >= data.images.length) currentImageIndex = 0;

      const img = document.getElementById('modal-image');
      const cur = document.getElementById('current-image');
      
      img.src = data.images[currentImageIndex];
      cur.textContent = currentImageIndex + 1;
    }
  
    // 兼容你 HTML 里已有的 inline onclick（也方便调试）
    window.openModal   = openModal;
    window.closeModal  = closeModal;
    window.changeImage = changeImage;
    
    // Test function for debugging
    window.testGallery = function(collection = 'ukiyo-e-1') {
      console.log('Testing gallery for collection:', collection);
      const data = galleryData[collection];
      if (!data) {
        console.error('Collection not found:', collection);
        return;
      }
      
      console.log('Collection data:', data);
      console.log('Images:', data.images);
      
      // Test each image individually
      data.images.forEach((imagePath, index) => {
        const testImg = new Image();
        testImg.onload = function() {
          console.log(`✅ Image ${index + 1} loaded successfully:`, imagePath);
        };
        testImg.onerror = function() {
          console.error(`❌ Image ${index + 1} failed to load:`, imagePath);
        };
        testImg.src = imagePath;
      });
    };
    
    // Debug information
    console.log('Art Gallery initialized successfully');
    console.log('Available collections:', Object.keys(galleryData));
    
    // Test navigation logic for ukiyo-e-1 collection
    if (galleryData['ukiyo-e-1']) {
      console.log('Testing ukiyo-e-1 navigation:');
      const testData = galleryData['ukiyo-e-1'];
      for (let i = 0; i < testData.images.length; i++) {
        console.log(`  Index ${i}: ${testData.images[i]}`);
      }
    }
  })();
  