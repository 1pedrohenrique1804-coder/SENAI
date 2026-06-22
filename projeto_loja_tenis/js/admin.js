document.addEventListener('DOMContentLoaded',()=>{
  const detected = [
    'tenis1.jpg','tenis2.jpg','tenis3.jpg','tenis4.jpg','tenis5.jpg','tenis6.jpg',
    'tenis7.jpg','tenis8.jpg','tenis9.jpg','tenis10.jpg','tenis11.jpg','tenis12.jpg'
  ];
  const KEY = 'product_meta_v1';
  function loadMeta(){ try{ return JSON.parse(localStorage.getItem(KEY)||'{}'); }catch(e){return {}} }
  function saveMeta(m){ localStorage.setItem(KEY, JSON.stringify(m)); }

  const meta = loadMeta();
  const list = document.getElementById('list');

  detected.forEach((fn, idx)=>{
    const data = meta[fn] || {};
    const block = document.createElement('div');
    block.style.marginBottom='12px';
    block.innerHTML = `
      <div style="display:flex;gap:12px;align-items:center">
        <img src="assets/images/${fn}" style="width:80px;height:60px;object-fit:cover;border-radius:6px;border:1px solid #eee">
        <div style="flex:1">
          <div><strong>Arquivo:</strong> ${fn}</div>
          <div style="display:flex;gap:8px;margin-top:6px">
            <input data-fn="${fn}" data-field="title" placeholder="Título" value="${(data.title||'').replace(/"/g,'&quot;')}" style="flex:2;padding:8px;border-radius:6px;border:1px solid #e6e9ef">
            <input data-fn="${fn}" data-field="price" placeholder="Preço (ex:699.90)" value="${data.price||''}" style="width:140px;padding:8px;border-radius:6px;border:1px solid #e6e9ef">
          </div>
          <textarea data-fn="${fn}" data-field="desc" rows="2" placeholder="Descrição" style="width:100%;margin-top:8px;padding:8px;border-radius:6px;border:1px solid #e6e9ef">${data.desc||''}</textarea>
        </div>
      </div>
    `;
    list.appendChild(block);
  });

  document.getElementById('saveLocal').addEventListener('click',()=>{
    const inputs = document.querySelectorAll('[data-fn]');
    const newMeta = loadMeta();
    inputs.forEach(inp=>{
      const fn = inp.dataset.fn;
      const field = inp.dataset.field;
      const val = inp.value.trim();
      if(!newMeta[fn]) newMeta[fn] = {};
      if(field==='price') newMeta[fn][field] = val?Number(val):0;
      else newMeta[fn][field] = val;
    });
    saveMeta(newMeta);
    alert('Salvo no localStorage. As alterações serão usadas pela loja automaticamente. Para aplicar em outros navegadores, exporte e importe.');
  });

  document.getElementById('exportJson').addEventListener('click',()=>{
    const newMeta = loadMeta();
    const blob = new Blob([JSON.stringify(newMeta, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'saved_meta.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
});