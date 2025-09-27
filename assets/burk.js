/* Burk v1 – progressive enhancements: a11y + consent */
(function(){
  // Sticky header shadow
  const header=document.querySelector('.header');
  if(header){
    const onScroll=()=>{header.style.boxShadow = window.scrollY>4? 'var(--shadow-sm)':'none'};
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }

  // Accessible mobile nav (hamburger): ARIA, ESC, focus trap
  (function(){
    const headerEl = document.querySelector('.header');
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-nav');
    if(!headerEl || !toggle || !nav) return;
    let lastFocused = null;
    const focusableSel = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const getFocusable = () => Array.from(nav.querySelectorAll(focusableSel)).filter(el=>el.offsetParent!==null);

    function openMenu(){
      lastFocused = document.activeElement;
      headerEl.setAttribute('data-nav-open','true');
      toggle.setAttribute('aria-expanded','true');
      const items = getFocusable();
      items[0]?.focus();
      document.addEventListener('keydown',onKeydown);
    }
    function closeMenu(){
      headerEl.setAttribute('data-nav-open','false');
      toggle.setAttribute('aria-expanded','false');
      document.removeEventListener('keydown',onKeydown);
      if(lastFocused && document.contains(lastFocused)) toggle.focus();
    }
    function onKeydown(e){
      if(e.key==='Escape'){ e.preventDefault(); closeMenu(); return; }
      if(e.key==='Tab' && headerEl.getAttribute('data-nav-open')==='true'){
        const items = getFocusable();
        if(items.length===0) return;
        const first = items[0], last = items[items.length-1];
        if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
        else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
      }
    }
    toggle.addEventListener('click',()=>{
      const open = headerEl.getAttribute('data-nav-open')==='true';
      if(open) closeMenu(); else openMenu();
    });
    // Close when clicking outside nav on small screens
    document.addEventListener('click',(e)=>{
      if(headerEl.getAttribute('data-nav-open')!=='true') return;
      if(e.target===toggle || toggle.contains(e.target)) return;
      if(nav.contains(e.target)) return;
      closeMenu();
    });
  })();

  // Consent banner (minimal, TTDSG): only for non-essential cookies (none used). Placeholder text.
  const consentKey='burk.consent.v1';
  if(!localStorage.getItem(consentKey)){
    const inSubdir = /\/(produkte)\//.test(window.location.pathname);
    const privacyHref = (inSubdir? '../' : '') + 'datenschutz.html';
    const bar=document.createElement('div');
    bar.setAttribute('role','dialog');
    bar.setAttribute('aria-live','polite');
    bar.style.cssText='position:fixed;inset:auto 0 0 0;background:#fff;border-top:1px solid hsl(var(--neutral-200));box-shadow:var(--shadow-sm);padding:calc(12px + env(safe-area-inset-bottom)) 16px 12px 16px;z-index:1000';
    bar.innerHTML=`<div class="container" style="display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap">
      <p style="margin:0;max-width:60ch;color:hsl(var(--neutral-700))">Wir verwenden nur technisch notwendige Mittel zur Bereitstellung dieser Website. Weitere Informationen finden Sie in unserer <a id="privacy-link">Datenschutzerklärung</a>.</p>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" id="consent-accept">Verstanden</button>
      </div>
    </div>`;
    document.body.appendChild(bar);
    const pl=bar.querySelector('#privacy-link');
    if(pl) pl.setAttribute('href', privacyHref);
    document.getElementById('consent-accept')?.addEventListener('click',()=>{
      localStorage.setItem(consentKey,JSON.stringify({necessary:true,ts:Date.now()}));
      bar.remove();
    });
  }

  // Forms: show first invalid on submit, mark aria-invalid
  document.addEventListener('submit',function(e){
    const form=e.target;
    if(!(form instanceof HTMLFormElement)) return;
    if(!form.checkValidity()){
      e.preventDefault();
      const invalid=form.querySelector(':invalid');
      if(invalid){
        invalid.setAttribute('aria-invalid','true');
        invalid.focus();
      }
    }
  },true);

  // Simple product category filter (progressive enhancement)
  document.addEventListener('click', function(e){
    const btn = e.target.closest('[data-filter]');
    if(!btn) return;
    const group = btn.closest('[data-filter-group]');
    if(!group) return;
    const value = btn.getAttribute('data-filter');
    // set active state
    group.querySelectorAll('[data-filter]').forEach(b=>{
      const active = b===btn;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    // filter items
    const containerSel = group.getAttribute('data-target') || '#product-grid';
    const containers = Array.from(document.querySelectorAll(containerSel));
    if(containers.length===0) return;
    let visible=0;
    containers.forEach(container=>{
      container.querySelectorAll('[data-category]').forEach(card=>{
        const cat = card.getAttribute('data-category')||'';
        const show = value==='all' || value===cat;
        card.toggleAttribute('hidden', !show);
        if(show) visible++;
      });
    });
    const resultsEl = group.querySelector('[data-filter-results]');
    if(resultsEl) resultsEl.textContent = String(visible);
  });
})();

// Populate product thumbnails on the overview page using slug-based images
(function(){
  function enhanceProductThumbs(){
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    const cards = Array.from(grid.querySelectorAll('.card'));
    cards.forEach(card => {
      const thumb = card.querySelector('.product-thumb');
      if(!thumb || thumb.querySelector('picture')) return;
      const link = card.querySelector('a[href$=".html"]');
      if(!link) return;
      const href = link.getAttribute('href') || '';
      const slug = href.replace(/\.html$/,'');
      if(!slug) return;
      const title = (card.querySelector('.card-title')?.textContent || slug).trim();
      // Special handling for product variants
      let imageSlug = slug;
      if (slug === 'trutool-c-160' && title.toLowerCase().includes('spanabtrenner')) {
        imageSlug = 'trutool-c-160-spanabtrenner';
      }
      
      const base = `../assets/images/products/${imageSlug}`;

      const picture = document.createElement('picture');
      const source = document.createElement('source');
      source.setAttribute('srcset', `${base}.webp`);
      source.setAttribute('type', 'image/webp');
      const img = document.createElement('img');
      img.setAttribute('src', `${base}.jpg`);
      img.setAttribute('alt', title);
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
      // Reserve space to avoid layout shift on grid; aspect ratio ~16:9
      img.setAttribute('width', '640');
      img.setAttribute('height', '360');
      img.style.cssText = 'display:block;max-width:100%;height:auto;border-radius:var(--radius-md);object-fit:cover;box-shadow:var(--shadow-md);';
      img.addEventListener('error', () => {
        // Graceful fallback: revert to placeholder text if image not found
        thumb.innerHTML = 'Bild';
      }, { once: true });

      picture.appendChild(source);
      picture.appendChild(img);
      thumb.innerHTML = '';
      thumb.appendChild(picture);
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', enhanceProductThumbs);
  } else {
    enhanceProductThumbs();
  }
})();

// Inject hero image on product detail pages (auto by slug)
(function(){
  // Detect product detail by presence of h1 and article card
  const main = document.getElementById('main');
  if(!main) return;
  const isDetail = /\/produkte\/(?!index\.html)[^\/]+\.html$/i.test(location.pathname);
  if(!isDetail) return;
  // Determine slug from URL (e.g., trutool-n-700.html -> trutool-n-700)
  const slug = location.pathname.split('/').pop().replace(/\.html$/,'');
  const article = main.querySelector('article.card');
  if(!article) return;
  // If a hero <picture> already exists (server-rendered), do nothing
  if(article.querySelector('picture')) return;
  // Where to inject: try existing .product-thumb placeholder; else create container
  let container = article.querySelector('.product-thumb');
  if(!container){
    // create left column container if grid layout is present
    const firstDiv = article.querySelector('div');
    container = document.createElement('div');
    container.className = 'product-thumb';
    container.style.marginBottom = '12px';
    if(firstDiv) firstDiv.prepend(container); else article.prepend(container);
  }

  // Build picture element
  const base = `../assets/images/products/${slug}`;
  const picture = document.createElement('picture');
  const source = document.createElement('source');
  source.setAttribute('srcset', `${base}.webp`);
  source.setAttribute('type', 'image/webp');
  const img = document.createElement('img');
  img.setAttribute('src', `${base}.jpg`);
  img.setAttribute('loading', 'lazy');
  img.setAttribute('decoding', 'async');
  img.setAttribute('width', '1200');
  img.setAttribute('height', '678');
  const h1 = article.querySelector('h1');
  img.setAttribute('alt', (h1?.textContent || slug).trim());
  img.style.cssText = 'display:block;max-width:100%;height:auto;border-radius:var(--radius-md);box-shadow:var(--shadow-lg);';
  img.addEventListener('error', ()=>{ container.textContent = 'Bild'; }, { once: true });
  picture.appendChild(source);
  picture.appendChild(img);
  container.innerHTML = '';
  container.appendChild(picture);
})();
