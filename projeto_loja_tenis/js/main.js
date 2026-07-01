document.addEventListener('DOMContentLoaded',()=>{
  // Lista automática com imagens detectadas no projeto (atualize esta lista se adicionar/remover imagens)
  const detectedImages = [
    'tenis1.jpg','tenis2.jpg','tenis3.jpg','tenis4.jpg','tenis5.jpg','tenis6.jpg',
    'tenis7.jpg','tenis8.jpg','tenis9.jpg','tenis10.jpg','tenis12.jpg'
  ];

  // Dados manuais coletados (busca manual) — título sugerido, descrição e fontes
  const MANUAL_DATA = {
    "tenis1.jpg": {
      "title": "Nike Air Force 1 LV",
      "desc": "O clássico indestrutível em colaboração com Louis Vuitton. Couro premium branco, acabamento de luxo e design intemporal. Perfeito para quem busca sofisticação com um toque de exclusividade.",
      "sources": [
        {"title":"Louis Vuitton — Site Oficial","url":"https://www.louisvuitton.com/","snippet":"Página oficial da Louis Vuitton — consulte a seção de calçados e colaborações para modelos especiais."},
        {"title":"Air Force 1 x colaborações — Hypebeast","url":"https://hypebeast.com/","snippet":"Coberturas e artigos sobre colaborações entre marcas de luxo e sneakers."}
      ]
    },
    "tenis2.jpg": {
      "title": "Air Max TN White",
      "desc": "Silhueta TN clássica em branco puro. Amortecimento Tuned Air reativo, design agressivo e presença marcante. Uma escolha ousada para quem quer destaque no street wear.",
      "sources": [
        {"title":"Air Max Plus — Nike Official","url":"https://www.nike.com/air-max-plus","snippet":"Página oficial do Air Max Plus (TN) com imagens, tecnologias e opções de cores."},
        {"title":"Air Max Plus — Review (RunRepeat)","url":"https://runrepeat.com/nike-air-max-plus-review","snippet":"Review com foco no ajuste, amortecimento Tuned Air e durabilidade do Air Max Plus."}
      ]
    },
    "tenis3.jpg": {
      "title": "Air Max TN Black",
      "desc": "A silhueta TN em azul vibrante combina conforto superior com estética futurista. Tecnologia Tuned Air para amortecimento reativo e passada confortável. Ideal para o dia a dia.",
      "sources": [
        {"title":"Air Max Plus — Nike Official","url":"https://www.nike.com/air-max-plus","snippet":"Página oficial do Air Max Plus (TN) com imagens, tecnologias e opções de cores."},
        {"title":"Air Max Plus — Review (Sneaker News)","url":"https://sneakernews.com/?s=air+max+plus","snippet":"Cobertura de lançamentos e reviews do Air Max Plus em diferentes colorways."}
      ]
    },
    "tenis4.jpg": {
      "title": "Air Max TN Ocean",
      "desc": "Um ícone das ruas. Couro sintético durável, faixa lateral icônica e sola vulcanizada. Perfeito para skate, casual ou lifestyle — versátil e atemporal.",
      "sources": [
        {"title":"Old Skool — Vans Official","url":"https://www.vans.com/shop/shoes-classics-old-skool","snippet":"Página oficial do Old Skool com opções de cores e informações sobre materiais."},
        {"title":"Vans Old Skool — Review (The Guardian)","url":"https://www.theguardian.com/fashion/vans-old-skool-review","snippet":"Comentário sobre o sucesso cultural do modelo e seu apelo atemporal."}
      ]
    },
    "tenis5.jpg": {
      "title": "Air Max TN Purple",
      "desc": "A camurça delicada da PUMA em um design retro que nunca sai de moda. Perfil limpo, conforto urbano e estilo que funciona com qualquer roupa — o básico perfeito.",
      "sources": [
        {"title":"Suede Classic — PUMA Official","url":"https://us.puma.com/en/us/pd/suede-classic","snippet":"Página oficial com detalhes do material suede e opções de cores."},
        {"title":"Puma Suede — História e Review","url":"https://www.highsnobiety.com/puma-suede-history-review","snippet":"Contexto histórico do Suede e sua influência na cultura streetwear."}
      ]
    },
    "tenis6.jpg": {
      "title": "Air Max 95 Rose",
      "desc": "O clássico conforto New Balance. Retro com combinação de materiais, amortecimento todo o dia e design que envelheceu bem. Para quem valoriza conforto sem abrir mão do estilo.",
      "sources": [
        {"title":"574 Core — New Balance","url":"https://www.newbalance.com/pd/574-classic/574.html","snippet":"Página oficial do 574 com descrições de materiais e opções de tamanhos."},
        {"title":"New Balance 574 — Review (WearTesters)","url":"https://weartesters.com/new-balance-574-review","snippet":"Análise do ajuste e conforto do 574 para uso cotidiano."}
      ]
    },
    "tenis7.jpg": {
      "title": "ASICS GEL-KAYANO Runner",
      "desc": "Tecnologia GEL aperfeiçoada para amortecimento e estabilidade em corridas. Sistema de suporte avançado e acabamento técnico. Feito para corredores sérios que buscam desempenho.",
      "sources": [
        {"title":"GEL-KAYANO — ASICS Official","url":"https://www.asics.com/us/en-us/gel-kayano/c/gel-kayano","snippet":"Página oficial com tecnologias embarcadas e versões do modelo GEL‑KAYANO."},
        {"title":"ASICS GEL-KAYANO — Review (Runner's World)","url":"https://www.runnersworld.com/asics-gel-kayano-review","snippet":"Revisão técnica focada em estabilidade e experiência de corrida."}
      ]
    },
    "tenis8.jpg": {
      "title": "Air Force Suns",
      "desc": "Couro premium em um design minimalista que remete aos anos 80. Sola confortável, perfil limpo e versátil — combina com qualquer look casual ou dress code descontraído.",
      "sources": [
        {"title":"Classic Leather — Reebok Official","url":"https://www.reebok.com/us/classic-leather","snippet":"Página oficial do Classic Leather com imagens e opções de cores."},
        {"title":"Reebok Classic Leather — História (Hypebeast)","url":"https://hypebeast.com/reebok-classic-leather-history","snippet":"Contexto cultural e evolução do modelo Classic Leather."}
      ]
    },
    "tenis9.jpg": {
      "title": "Air Max TN Asian",
      "desc": "O tênis que revolucionou o basquete e a moda. Design icônico, presença ousada e apelo fashion incomparável. Transita perfeito entre performance e lifestyle premium.",
      "sources": [
        {"title":"Air Jordan 1 — Nike Jordan","url":"https://www.nike.com/jordan","snippet":"Seção oficial Jordan com modelos Air Jordan 1 e lançamentos relacionados."},
        {"title":"Air Jordan 1 — História e Impacto","url":"https://www.complex.com/sneakers/air-jordan-1-history","snippet":"Artigo detalhando a história e a influência da AJ1 na cultura sneaker."}
      ]
    },
    "tenis10.jpg": {
      "title": "Skechers D'Lites Chunky",
      "desc": "Sola robusta e presença marcante. Estilo chunky retrô que combina amortecimento generoso com aparência descontraída. O conforto que se vê de longe.",
      "sources": [
        {"title":"D'Lites — Skechers Official","url":"https://www.skechers.com/dlites","snippet":"Página oficial com variantes do D'Lites e informações sobre amortecimento."},
        {"title":"Skechers D'Lites — Review (Footwear News)","url":"https://footwearnews.com/skechers-dlites-review","snippet":"Comentário sobre popularidade e conforto do modelo D'Lites."}
      ]
    },
    "tenis12.jpg": {
      "title": "Hoka Clifton Ultralight",
      "desc": "Entressola macia como uma nuvem, perfil acolchoado e amortecimento leve. Design minimalista e ajuste confortável para longas caminhadas, corridas ou uso diário. Conforto garantido.",
      "sources": [
        {"title":"Clifton — HOKA Official","url":"https://www.hoka.com/en/us/clifton/","snippet":"Página oficial com descrições de amortecimento e versões do Clifton."},
        {"title":"Hoka Clifton — Review (Runner's World)","url":"https://www.runnersworld.com/hoka-clifton-review","snippet":"Avaliação destacando o conforto e aplicações ideais do Clifton."}
      ]
    }
  };

  const PRODUCT_META_KEY = 'product_meta_v1';
  // Gera título e descrição simples a partir do nome do arquivo
  function titleFromFilename(filename, index){
    // tenta extrair algo legível, caso contrário usa genérico
    const base = filename.replace(/\.[^/.]+$/, '');
    const readable = base.replace(/[_-]/g,' ').replace(/tenis/gi,'Tênis ').replace(/\d+/g, (m)=>m);
    return `Tênis ${readable.charAt(0).toUpperCase() + readable.slice(1)}`.replace(/\s+/g,' ').trim();
  }
  function descFromFilename(filename){
    // Gera uma descrição de marketing mais detalhada baseada no índice/arquivo
    const features = [
      'acabamento premium',
      'amortecimento responsivo',
      'solado em borracha antiderrapante',
      'palminha em espuma EVA para conforto',
      'design leve e moderno',
      'costuras reforçadas e durabilidade'
    ];
    const idx = Number((filename.match(/\d+/)||[0])[0]) || 0;
    const pick = features.slice(idx % features.length, (idx % features.length) + 3).join(', ');
    return `Tênis importado com ${pick}. Ideal para uso diário e atividades leves — confortável e estiloso.`;
  }
  function priceForIndex(i){
    const base = 500 + (i * 50) + (i%3)*30; // simples variação
    return Number((base + Math.round(Math.random()*150)).toFixed(2));
  }

  // Carrega metas salvas pelo usuário (edições)
  function loadMeta(){
    try{ return JSON.parse(localStorage.getItem(PRODUCT_META_KEY) || '{}'); }catch(e){return {}}
  }
  function saveMeta(meta){ localStorage.setItem(PRODUCT_META_KEY, JSON.stringify(meta)); }
  // Carrega metas do repositório (data/saved_meta.json) com fallback seguro
  async function loadRepoMeta(){
    try{
      const res = await fetch('data/saved_meta.json');
      if(!res.ok) return {};
      return await res.json();
    }catch(e){
      // Fetch pode falhar quando aberto via file:// ou por CORS — retornamos vazio
      return {};
    }
  }

  // Produtos em memória (serão populados na inicialização)
  let products = [];

  // Inicialização assíncrona: tenta carregar metas do repositório, depois aplica metas locais (localStorage) se existirem
  (async function init(){
    const repoMeta = await loadRepoMeta();
    const savedMeta = loadMeta();
    products = detectedImages.map((imgName, idx)=>{
      const key = imgName;
      const repo = repoMeta[key] || {};
      const local = savedMeta[key] || {};
      const manual = MANUAL_DATA[key] || {};
      const chosen = Object.assign({}, repo, manual, local);
      return {
        id: idx+1,
        img: `assets/images/${imgName}`,
        filename: imgName,
        title: chosen.title || titleFromFilename(imgName, idx+1),
        price: chosen.price !== undefined ? Number(chosen.price) : priceForIndex(idx+1),
        desc: chosen.desc || descFromFilename(imgName),
        sources: chosen.sources || manual.sources || []
      };
    });

    renderProducts(products);
    try{ injectJsonLd(products); }catch(e){console.warn('JSON-LD inject failed', e)}
    updateCartUI();
  })();

  const grid = document.getElementById('grid');
  const search = document.getElementById('search');
  const cartBtn = document.getElementById('cartBtn');
  const cartCount = document.getElementById('cartCount');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const closeCart = document.getElementById('closeCart');
  const checkout = document.getElementById('checkout');
  const WHATSAPP_NUMBER = (document.querySelector('meta[name="whatsapp-number"]') || {}).content || '+551199999999';

  // Render produtos
  function formatPrice(v){ return 'R$ ' + Number(v).toFixed(2).replace('.',','); }
  function renderProducts(list){
    grid.innerHTML = '';
    list.forEach(p=>{
      const card = document.createElement('div');
      card.className='card';
      const isOffer = (p.id % 4 === 0);
      card.innerHTML = `
        ${isOffer?'<div class="ribbon">OFERTA</div>':''}
        <img loading="lazy" src="${p.img}" alt="${p.title}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'600\\' height=\\'400\\'><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%23e2e8f0\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%2394a3b8\\' font-size=\\'20\\'>Imagem indisponível</text></svg>'" />
        <div class="card-content">
          <div class="meta">Código #${p.id}</div>
          <h4>${p.title}</h4>
          <div class="price">${formatPrice(p.price)}</div>
          <div class="actions">
            <button class="btn btn-primary" data-id="${p.id}">Detalhes</button>
            <button class="btn btn-primary" data-add="${p.id}">Comprar</button>
          </div>
          <button class="btn whatsapp" data-ws="${p.id}" style="width: 100%; margin-top: 8px;">WhatsApp</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  renderProducts(products);

  // --- SEO: gerar JSON-LD dinâmico com os produtos ---
  function injectJsonLd(products){
    const ld = {
      "@context":"https://schema.org",
      "@graph": products.map(p=>({
        "@type":"Product",
        "name": p.title,
        "image": window.location.origin + '/' + p.img,
        "description": p.desc,
        "sku": p.filename,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "BRL",
          "price": p.price.toFixed(2),
          "availability": "https://schema.org/InStock"
        }
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ld, null, 2);
    // remove scripts antigos
    const old = document.getElementById('jsonld-products');
    if(old) old.remove();
    script.id = 'jsonld-products';
    document.head.appendChild(script);
  }
  try{ injectJsonLd(products); }catch(e){console.warn('JSON-LD inject failed', e)}

  // Modal
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalSources = document.getElementById('modalSources');
  const closeModal = document.getElementById('closeModal');
  const addCartBtn = document.getElementById('addCart');
  let currentProduct = null;

  grid.addEventListener('click', (e)=>{
    const id = e.target.dataset.id || e.target.dataset.add;
    const wsId = e.target.dataset.ws;
    if(wsId){
      const prod = products.find(x=>x.id==wsId);
      const message = `Olá! Tenho interesse no produto: ${prod.title} (Código: #${prod.id}). Preço: R$ ${prod.price.toFixed(2).replace('.',',')}. Como faço para comprar?`;
      const num = WHATSAPP_NUMBER.replace(/[^+0-9]/g,'');
      const url = `https://wa.me/${num.replace('+','') }?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      return;
    }
    if(!id) return;
    const prod = products.find(x=>x.id==id);
    if(e.target.dataset.id){
      currentProduct = prod;
      modalImg.src = prod.img;
      modalTitle.textContent = prod.title;
      modalPrice.textContent = formatPrice(prod.price);
      modalDesc.textContent = prod.desc;
      // mostrar fontes, se houver
      if(modalSources){
        if(prod.sources && prod.sources.length){
          modalSources.innerHTML = prod.sources.map(s=>`<div class="source"><a href="${s.url}" target="_blank">${s.title}</a> — <span class="muted">${s.snippet}</span></div>`).join('');
        } else {
          modalSources.innerHTML = '';
        }
      }
      modal.classList.remove('hidden');
    } else if(e.target.dataset.add){
      addToCart(prod);
      updateCartUI();
      e.target.textContent = 'Adicionado';
      setTimeout(()=> e.target.textContent = 'Comprar',900);
    }
  });

  closeModal.addEventListener('click',()=>modal.classList.add('hidden'));
  addCartBtn.addEventListener('click',()=>{
    if(currentProduct) { addToCart(currentProduct); updateCartUI(); alert(currentProduct.title + ' adicionado ao carrinho.'); modal.classList.add('hidden'); }
  });

  // Carrinho
  const CART_KEY = 'loja_cart_v1';
  function getCart(){
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  }
  function setCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); }
  function addToCart(prod){
    const cart = getCart();
    cart.push({id:prod.id,title:prod.title,price:prod.price,img:prod.img});
    setCart(cart);
  }
  function removeFromCart(index){
    const cart = getCart();
    cart.splice(index,1);
    setCart(cart);
    updateCartUI();
  }

  function updateCartUI(){
    const cart = getCart();
    cartCount.textContent = cart.length;
    cartItemsEl.innerHTML = '';
    let total = 0;
    cart.forEach((it,i)=>{
      total += Number(it.price || 0);
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${it.img}" alt="${it.title}">
        <div class="info">
          <div>${it.title}</div>
          <div style="color:#666">R$ ${Number(it.price).toFixed(2).replace('.',',')}</div>
        </div>
        <div><button class="btn remove" data-remove="${i}">Remover</button></div>
      `;
      cartItemsEl.appendChild(div);
    });
    cartTotalEl.textContent = 'R$ ' + total.toFixed(2).replace('.',',');
    // attach remove handlers
    cartItemsEl.querySelectorAll('[data-remove]').forEach(btn=>{
      btn.addEventListener('click',()=>removeFromCart(Number(btn.dataset.remove)));
    });
  }

  // --- Edição de produtos (admin in-browser) REMOVIDO ---

  cartBtn.addEventListener('click',()=>{
    cartDrawer.classList.remove('hidden');
    cartDrawer.setAttribute('aria-hidden','false');
    updateCartUI();
  });
  closeCart.addEventListener('click',()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });

  checkout.addEventListener('click',()=>{
    // redireciona para página de checkout
    window.location.href = 'checkout.html';
  });

  // Busca simples
  search.addEventListener('input',(e)=>{
    const q = e.target.value.trim().toLowerCase();
    if(!q) return renderProducts(products);
    renderProducts(products.filter(p=> (p.title + ' ' + p.desc).toLowerCase().includes(q)));
  });

  // Filtros e ordenação
  const filterMax = document.getElementById('filterMax');
  const sortSelect = document.getElementById('sortSelect');
  const clearFilters = document.getElementById('clearFilters');

  function applyFiltersAndSort(){
    let list = products.slice();
    const max = parseFloat(filterMax.value);
    if(!isNaN(max)) list = list.filter(p=> p.price <= max);
    const q = search.value.trim().toLowerCase();
    if(q) list = list.filter(p=> (p.title + ' ' + p.desc).toLowerCase().includes(q));
    const sort = sortSelect.value;
    if(sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
    else if(sort === 'price-desc') list.sort((a,b)=>b.price-a.price);
    else if(sort === 'name-asc') list.sort((a,b)=>a.title.localeCompare(b.title,'pt'));
    renderProducts(list);
  }

  filterMax.addEventListener('input', applyFiltersAndSort);
  sortSelect.addEventListener('change', applyFiltersAndSort);
  clearFilters.addEventListener('click', ()=>{ filterMax.value=''; sortSelect.value='default'; search.value=''; renderProducts(products); });

  // inicializa estado
  updateCartUI();
  // footer year
  document.getElementById('ano').textContent = new Date().getFullYear();
});