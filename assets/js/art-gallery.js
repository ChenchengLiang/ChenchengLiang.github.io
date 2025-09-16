// assets/js/art-gallery.js
(function () {
    // 仅在 Art-Collection 页面启用，避免污染其它页面
    if (!location.pathname.toLowerCase().startsWith('/art-collection/')) return;
  
    // —— 你的 galleryData 放这里（整段粘过来） ——
    const galleryData = {   
        'ukiyo-e-1': {
        title: '爪裂虚空, 破维踏界',
        description: '一跃如虹, 凌空无惧',
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
        title: '赤狐烟雨, 山海绘卷',
        description: '身形如电, 踏影逐风',
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
        title: '云卷赤焰, 游刃无羁',
        description: '双瞳似月, 逐影凌空',
        images: [
          '/assets/img/cats/4/1.png',
          '/assets/img/cats/4/u2667282477_httpss.mj.run3DhE7LQu_Ek_A_traditional_ukiyo-e_st_392a0b21-d20c-423b-86ee-f88af6c2c712_3.png',
          '/assets/img/cats/4/u2667282477_httpss.mj.runFtiRZBXpA2k_A_wild_black_striped_Eur_098e1afc-728e-4580-81ce-64e2e432ed39_0.png',
          '/assets/img/cats/4/u2667282477_httpss.mj.runFtiRZBXpA2k_A_wild_black_striped_Eur_098e1afc-728e-4580-81ce-64e2e432ed39_2.png'
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
          '/assets/img/cats/7/u2667282477_httpss.mj.runWpI773UvTNw_A_traditional_ukiyo-e_st_60357091-2a54-4e32-9354-f8e775d05ebe_2.png',
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
  
      if (e.target.matches('.nav-btn.prev')) changeImage(-1);
      if (e.target.matches('.nav-btn.next')) changeImage(1);
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
      currentCollection = collection;
      currentImageIndex = 0;
  
      const data = galleryData[collection];
      if (!data) return;
  
      const modal = document.getElementById('gallery-modal');
      const img = document.getElementById('modal-image');
      const title = document.getElementById('modal-title');
      const desc = document.getElementById('modal-description');
      const cur = document.getElementById('current-image');
      const total = document.getElementById('total-images');
  
      img.src = data.images[0];
      title.textContent = data.title;
      desc.textContent = data.description;
      cur.textContent = '1';
      total.textContent = data.images.length;
  
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  
    function closeModal() {
      const modal = document.getElementById('gallery-modal');
      if (modal) modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  
    function changeImage(direction) {
      const data = galleryData[currentCollection];
      if (!data) return;
  
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
  })();
  